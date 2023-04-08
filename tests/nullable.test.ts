import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Nullable', () => {
  test('string', () => {
    const schema = z.string().nullable();

    expect(schema);
  });
  test('object values', () => {
    const schema = z.object({
      foo: z.string().nullable(),
    });

    expect(schema);
  });
  test('array values', () => {
    const schema = z.array(z.string().nullable());

    expect(schema);
  });
});
