import type { z } from 'zod';
import type BaseGenerator from './BaseGenerator';

export default class NumberGenerator<T extends z.ZodNumber> implements BaseGenerator<T> {
  public generate(schema: T) {
    let number: z.infer<T> = 1;

    if (schema._def.checks?.length > 0) {
      for (const check of schema._def.checks) {
        switch (check.kind) {
          case 'int':
          case 'finite':
            number = 1;
            break;
          case 'min':
            number = check.value + 1;
            break;
          case 'max':
            number = check.value - 1;
            break;
          case 'multipleOf':
            number = check.value;
            break;
        }
      }
    }

    return number;
  }
}
