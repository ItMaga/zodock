import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Union', () => {
  test('base', () => {
    const schema = z.union([z.string(), z.number(), z.boolean(), z.literal('')]);

    expect(schema);
  });
});
