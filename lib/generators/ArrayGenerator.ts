import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import { DepthLimitError } from '../errors/DepthLimitError';
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

    try {
      const mockGenerator = new MockGenerator(schema.element);
      return Array.from({ length }, () => mockGenerator.generate());
    }
    catch (e) {
      if (e instanceof DepthLimitError) {
        return [];
      }
      throw e;
    }
  }
}
