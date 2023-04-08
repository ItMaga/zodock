import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('NaN', () => {
  test('base', () => {
    const schema = z.nan();

    expect(schema);
  });
  test('in object', () => {
    const schema = z.object({ foo: z.nan() });

    expect(schema);
  });
});
