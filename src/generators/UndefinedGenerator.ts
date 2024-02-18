import type { z } from 'zod';
import type BaseGenerator from './BaseGenerator';

export default class UndefinedGenerator<T extends z.ZodUndefined> implements BaseGenerator<T> {
  public generate() {
    return undefined;
  }
}
