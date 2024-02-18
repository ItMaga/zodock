import type { z } from 'zod';
import type BaseGenerator from './BaseGenerator';

export default class LiteralGenerator<T extends z.ZodLiteral<unknown>> implements BaseGenerator<T> {
  public generate(schema: T) {
    return schema._def.value;
  }
}
