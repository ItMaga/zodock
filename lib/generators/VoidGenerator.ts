import type { z } from 'zod';
import type BaseGenerator from './BaseGenerator';

export default class VoidGenerator<T extends z.ZodVoid> implements BaseGenerator<T> {
  public generate() {
    void 0;
  }
}
