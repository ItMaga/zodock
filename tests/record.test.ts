import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Record', () => {
  test('base', () => {
    const schema = z.record(z.string());

    expect(schema);
  });
  test('with key', () => {
    const schema = z.record(z.string(), z.number());

    expect(schema);
  });
});
