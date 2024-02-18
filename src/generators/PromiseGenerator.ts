import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class PromiseGenerator<T extends z.ZodPromise<z.ZodTypeAny>> implements BaseGenerator<T> {
  public generate(schema: T) {
    const mockGenerator = new MockGenerator(schema._def.type);
    const generated = mockGenerator.generate();
    return Promise.resolve(generated);
  }
}
