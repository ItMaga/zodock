import type { z } from 'zod';
import BaseGenerator from './BaseGenerator';

export default class EnumGenerator<T extends z.ZodEnum<any>> extends BaseGenerator<T> {
  public generate(schema: T) {
    const { values } = schema._def;
    return values[Math.floor(Math.random() * values.length)];
  }
}
