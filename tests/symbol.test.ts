import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Symbol', () => {
  test('base', () => {
    const schema = z.symbol();

    expect(schema);
  });
});
