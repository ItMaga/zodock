import { z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class IntersectionGenerator<T extends z.ZodIntersection<z.ZodTypeAny, z.ZodTypeAny>> implements BaseGenerator<T> {
  public generate(schema: T) {
    if ('typeName' in schema._def.left && 'typeName' in schema._def.right) {
      if (schema._def.left.typeName === 'ZodUnion' && schema._def.right.typeName === 'ZodUnion') {
        const sharedOptions = schema._def.left._def.options.filter((leftOption: z.ZodTypeAny) => {
          return schema._def.right._def.options.some((rightOption: z.ZodTypeAny) => rightOption._def.typeName === leftOption._def.typeName);
        });

        const mockGenerator = new MockGenerator(z.union(sharedOptions));
        return mockGenerator.generate();
      }
    }

    const leftGenerated = new MockGenerator(schema._def.left).generate();
    const rightGenerated = new MockGenerator(schema._def.right).generate();
    const merged = this.mergeValues(leftGenerated, rightGenerated);
    return merged;
  }

  private mergeValues(a: any, b: any): any {
    if (Array.isArray(a) && Array.isArray(b)) {
      const newArray = [];
      for (let i = 0; i < a.length; i++) {
        newArray.push(this.mergeValues(a[i], b[i]));
      }
      return newArray;
    }
    else if (a instanceof Date && b instanceof Date) {
      return a;
    }
    else if (typeof a === 'object' && typeof b === 'object') {
      return { ...a, ...b };
    }
    else {
      return a;
    }
  }
}
