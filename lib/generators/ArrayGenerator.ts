import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

const DEFAULT_LENGTH = 3;
export default class ArrayGenerator<T extends z.ZodArray<any>> implements BaseGenerator<T> {
  public generate(schema: T) {
    let length = DEFAULT_LENGTH;
    if (schema._def.minLength) {
      length = schema._def.minLength.value + 1;
    }
    if (schema._def.maxLength) {
      length = schema._def.maxLength.value - 1;
    }
    if (schema._def.exactLength) {
      length = schema._def.exactLength.value;
    }

    const mockGenerator = new MockGenerator(schema._def.type);
    return Array.from({ length }, () => mockGenerator.generate());
  }
}
