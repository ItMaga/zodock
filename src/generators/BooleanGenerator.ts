import type { z } from 'zod';
import BaseGenerator from './BaseGenerator';

export default class BooleanGenerator<T extends z.ZodBoolean> extends BaseGenerator<T> {
  public generate() {
    return Math.random() >= 0.5;
  }
}
