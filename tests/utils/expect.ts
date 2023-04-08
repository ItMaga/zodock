import type { z } from 'zod';
import { expect as viExpect } from 'vitest';
import { createMock } from '../../lib';

export function expect<T extends z.ZodTypeAny>(schema: T) {
  return viExpect(schema.safeParse(createMock(schema)).success).toBe(true);
}
