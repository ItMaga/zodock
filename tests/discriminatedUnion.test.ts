import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Discriminated Union', () => {
  test('base', () => {
    const schema = z.discriminatedUnion('status', [
      z.object({ status: z.literal('success'), data: z.string() }),
      z.object({ status: z.literal('failed'), error: z.number() }),
    ]);

    expect(schema);
  });
});
