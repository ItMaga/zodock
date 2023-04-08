import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('BigInt', () => {
  test('base', () => {
    const schema = z.bigint();

    expect(schema);
  });
  test('min or gt/gte', () => {
    const schema = z.bigint().min(10n);

    expect(schema);
  });
  test('max or lt/lte', () => {
    const schema = z.bigint().max(10n);

    expect(schema);
  });
  test('positive', () => {
    const schema = z.bigint().positive();

    expect(schema);
  });
  test('nonpositive', () => {
    const schema = z.bigint().nonpositive();

    expect(schema);
  });
  test('negative', () => {
    const schema = z.bigint().negative();

    expect(schema);
  });
  test('nonnegative', () => {
    const schema = z.bigint().nonnegative();

    expect(schema);
  });
  test('multipleOf', () => {
    const schema = z.bigint().multipleOf(10n);

    expect(schema);
  });
});
