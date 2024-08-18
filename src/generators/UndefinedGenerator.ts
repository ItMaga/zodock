import type { z } from 'zod';
import BaseGenerator from './BaseGenerator';

export default class UndefinedGenerator<T extends z.ZodUndefined> extends BaseGenerator<T> {
  public generate() {
    return undefined;
  }
}
