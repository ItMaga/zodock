import type { z } from 'zod';
import BaseGenerator from './BaseGenerator';

export default class NaNGenerator<T extends z.ZodNaN> extends BaseGenerator<T> {
  public generate(): number {
    return NaN;
  }
}
