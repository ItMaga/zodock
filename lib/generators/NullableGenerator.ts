import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class NullableGenerator<TOptions extends z.ZodTypeAny, T extends z.ZodNullable<TOptions>> implements BaseGenerator<T> {
  public generate(schema: T) {
    if (Math.random() > 0.5) {
      return null;
    }

    const generator = new MockGenerator(schema._def.innerType);
    return generator.generate();
  }
}
