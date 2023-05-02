import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class LazyGenerator<T extends z.ZodLazy<z.ZodTypeAny>> implements BaseGenerator<T> {
  public generate(schema: T): z.infer<typeof schema> {
    const mockGenerator = new MockGenerator(schema._def.getter());
    return mockGenerator.generate();
  }
}
