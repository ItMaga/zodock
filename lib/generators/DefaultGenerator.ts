import type { z } from 'zod';
import type BaseGenerator from './BaseGenerator';

export default class DefaultGenerator<T extends z.ZodDefault<z.ZodTypeAny>> implements BaseGenerator<T> {
  generate(schema: T) {
    return schema._def.defaultValue();
  }
}
