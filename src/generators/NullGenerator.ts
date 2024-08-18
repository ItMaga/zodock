import type { z } from 'zod';
import BaseGenerator from './BaseGenerator';

export default class NullGenerator<T extends z.ZodNull> extends BaseGenerator<T> {
  public generate() {
    return null;
  }
}
