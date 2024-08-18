import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import BaseGenerator from './BaseGenerator';

export default class NullableGenerator<T extends z.ZodTypeAny> extends BaseGenerator<T> {
  public generate(schema: T) {
    if (Math.random() > 0.5) {
      return null;
    }

    const generator = new MockGenerator(schema._def.innerType, { extensions: this.extensions });
    return generator.generate();
  }
}
