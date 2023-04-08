import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Enum', () => {
  test('base', () => {
    const schema = z.enum(['a', 'b', 'c']);

    expect(schema);
  });
  test('by variable', () => {
    const values = ['a', 'b', 'c'] as const;
    const schema = z.enum(values);

    expect(schema);
  });
});
