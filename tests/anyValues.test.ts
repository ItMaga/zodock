import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Any values', () => {
  test('any', () => {
    const schema = z.any();

    expect(schema);
  });
  test('unknown', () => {
    const schema = z.unknown();

    expect(schema);
  });
});
