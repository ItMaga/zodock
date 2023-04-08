import type { z } from 'zod';
import type BaseGenerator from './BaseGenerator';

export default class BooleanGenerator<T extends z.ZodBoolean> implements BaseGenerator<T> {
  public generate() {
    return Math.random() >= 0.5;
  }
}
