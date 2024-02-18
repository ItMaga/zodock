import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class CatchGenerator<T extends z.ZodCatch<z.ZodTypeAny>> implements BaseGenerator<T> {
  public generate(schema: T) {
    const mockGenerator = new MockGenerator(schema._def.innerType);
    return mockGenerator.generate();
  }
}
