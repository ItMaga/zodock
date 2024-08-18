import type { z } from 'zod';
import { expect as viExpect } from 'vitest';
import { createMock } from '../../src';
import type { GeneratorOptions } from '../../src/types';

export function expect<T extends z.ZodTypeAny>(schema: T, options?: GeneratorOptions<T>) {
  return viExpect(schema.safeParse(createMock(schema, options)).success).toBe(true);
}
