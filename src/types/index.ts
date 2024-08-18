import type { z } from 'zod';
import type Extension from '../extensions';

export interface GeneratorOptions<T extends z.ZodTypeAny> {
  extensions: Extension<T>[]
}
