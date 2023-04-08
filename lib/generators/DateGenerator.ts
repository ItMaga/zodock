import type { z } from 'zod';
import type BaseGenerator from './BaseGenerator';

export default class DateGenerator<T extends z.ZodDate> implements BaseGenerator<T> {
  public generate(schema: T) {
    let date: z.infer<T> = new Date();

    if (schema._def.checks?.length > 0) {
      for (const check of schema._def.checks) {
        switch (check.kind) {
          case 'min':
            date = new Date(check.value + 1);
            break;
          case 'max':
            date = new Date(check.value - 1);
            break;
        }
      }
    }

    return date;
  }
}
