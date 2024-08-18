import type { z } from 'zod';
import BaseGenerator from './BaseGenerator';

export default class DefaultGenerator<T extends z.ZodDefault<z.ZodTypeAny>> extends BaseGenerator<T> {
  generate(schema: T) {
    return schema._def.defaultValue();
  }
}
