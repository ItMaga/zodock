import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Tuple', () => {
  test('base', () => {
    const schema = z.tuple([z.string(), z.number(), z.boolean()]);

    expect(schema);
  });
  test('rest', () => {
    const schema = z.tuple([z.string(), z.number()]).rest(z.boolean());

    expect(schema);
  });
});
