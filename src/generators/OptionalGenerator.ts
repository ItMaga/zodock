import type { z } from 'zod';
import BaseGenerator from './BaseGenerator';

export default class OptionalGenerator<TOptional extends z.ZodTypeAny, T extends z.ZodOptional<TOptional>> extends BaseGenerator<T> {
  public generate() {
    return undefined;
  }
}
