import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import BaseGenerator from './BaseGenerator';

export default class SetGenerator<T extends z.ZodSet> extends BaseGenerator<T> {
  public generate(schema: T) {
    const valueGenerator = new MockGenerator(schema._def.valueType, { extensions: this.extensions });
    const generatedValue = valueGenerator.generate();

    if (schema._def.minSize) {
      const set = new Set([generatedValue]);
      while (set.size < schema._def.minSize.value) {
        set.add(valueGenerator.generate());
      }
      return set;
    }
    else if (schema._def.maxSize) {
      const set = new Set();
      while (set.size < schema._def.maxSize.value) {
        set.add(valueGenerator.generate());
      }
      return set;
    }

    return new Set([generatedValue]);
  }
}
