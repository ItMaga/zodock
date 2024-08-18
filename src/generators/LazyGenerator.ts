import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import BaseGenerator from './BaseGenerator';

export default class LazyGenerator<T extends z.ZodLazy<z.ZodTypeAny>> extends BaseGenerator<T> {
  public generate(schema: T): z.infer<typeof schema> {
    const mockGenerator = new MockGenerator(schema._def.getter(), { extensions: this.extensions });
    return mockGenerator.generate();
  }
}
