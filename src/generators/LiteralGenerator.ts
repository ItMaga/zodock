import type { z } from 'zod';
import BaseGenerator from './BaseGenerator';

export default class LiteralGenerator<T extends z.ZodLiteral<unknown>> extends BaseGenerator<T> {
  public generate(schema: T) {
    return schema._def.value;
  }
}
