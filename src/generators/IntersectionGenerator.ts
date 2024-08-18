import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import BaseGenerator from './BaseGenerator';

export default class IntersectionGenerator<T extends z.ZodIntersection<z.ZodTypeAny, z.ZodTypeAny>> extends BaseGenerator<T> {
  public generate(schema: T) {
    const { _def: leftDef } = schema._def.left;
    const { _def: rightDef } = schema._def.right;

    if ('typeName' in leftDef && 'typeName' in rightDef) {
      if (leftDef.typeName === 'ZodUnion' && rightDef.typeName === 'ZodUnion') {
        const sharedOptions = leftDef.options.filter((leftOption: z.ZodTypeAny) => {
          return rightDef.options.some((rightOption: z.ZodTypeAny) => rightOption._def.typeName === leftOption._def.typeName);
        });
        const randomIndex = Math.floor(Math.random() * sharedOptions.length);
        const randomOption = sharedOptions[randomIndex];

        const mockGenerator = new MockGenerator(randomOption, { extensions: this.extensions });
        return mockGenerator.generate();
      }
    }

    const leftGenerated = new MockGenerator(schema._def.left, { extensions: this.extensions }).generate();
    const rightGenerated = new MockGenerator(schema._def.right, { extensions: this.extensions }).generate();
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
