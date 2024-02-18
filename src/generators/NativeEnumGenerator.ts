import type { z } from 'zod';
import type BaseGenerator from './BaseGenerator';

export default class NativeEnumGenerator<TOptions extends z.EnumLike, T extends z.ZodNativeEnum<TOptions>> implements BaseGenerator<T> {
  public generate(schema: T) {
    const values = Object.values(schema._def.values);
    return values[Math.floor(Math.random() * values.length)] as z.infer<typeof schema>;
  }
}
