import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Branded', () => {
  test('string', () => {
    const schema = z.string().brand('myBrand');

    expect(schema);
  });
  test('object', () => {
    const schema = z.object({
      foo: z.string().brand('brandKey'),
    }).brand('brandObject');

    expect(schema);
  });
});
