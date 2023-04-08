import type { z } from 'zod';

export default abstract class BaseGenerator<T extends z.ZodTypeAny> {
  public abstract generate(schema: T): z.infer<T>;
}
