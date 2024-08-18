import type { z } from 'zod';
import type Extension from '../extensions';

interface Options<T extends z.ZodTypeAny> {
  extensions: Extension<T>[]
}

export default abstract class BaseGenerator<T extends z.ZodTypeAny> {
  public abstract generate(schema: T): z.infer<T>;

  protected extensions: Extension<T>[];

  constructor(options?: Options<T>) {
    this.extensions = options?.extensions ?? [];
  }

  public satisfiesExtension(schema: z.ZodTypeAny): Extension<T> | undefined {
    return this.extensions.find(extension => extension.isTypeOf(schema));
  }
}
