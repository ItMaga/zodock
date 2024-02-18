import type { z } from 'zod';
import type BaseGenerator from './BaseGenerator';

export default class NullGenerator<T extends z.ZodNull> implements BaseGenerator<T> {
  public generate() {
    return null;
  }
}
