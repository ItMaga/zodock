import type { z } from 'zod';
import BaseGenerator from './BaseGenerator';

export default class VoidGenerator<T extends z.ZodVoid> extends BaseGenerator<T> {
  public generate() {
    void 0;
  }
}
