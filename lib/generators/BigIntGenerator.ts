import type { z } from 'zod';
import type BaseGenerator from './BaseGenerator';

export default class BigIntGenerator<T extends z.ZodBigInt> implements BaseGenerator<T> {
  public generate(schema: T) {
    let bigInt: z.infer<T> = BigInt(1);

    if (schema._def.checks?.length > 0) {
      for (const check of schema._def.checks) {
        switch (check.kind) {
          case 'min':
            bigInt = check.value + BigInt(1);
            break;
          case 'max':
            bigInt = check.value - BigInt(1);
            break;
          case 'multipleOf':
            bigInt = check.value;
            break;
        }
      }
    }

    return bigInt;
  }
}
