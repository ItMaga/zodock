import type { z } from 'zod';
import type BaseGenerator from './BaseGenerator';

export default class OptionalGenerator<TOptional extends z.ZodTypeAny, T extends z.ZodOptional<TOptional>> implements BaseGenerator<T> {
  public generate() {
    return undefined;
  }
}
