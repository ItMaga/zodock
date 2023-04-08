import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Void', () => {
  test('base', () => {
    const schema = z.void();

    expect(schema);
  });
});
