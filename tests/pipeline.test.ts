import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Pipeline', () => {
  test('with transform', () => {
    const schema = z.string()
      .transform(val => val.length)
      .pipe(z.number().min(10));

    expect(schema._def.out);
  });
  test('with coerse', () => {
    const dateLike = z.union([z.number(), z.string(), z.date()]);
    const schema = dateLike.pipe(z.coerce.date());

    expect(schema._def.out);
  });
  test('with chain coerse', () => {
    const toNumber = z.number().or(z.string()).pipe(z.coerce.number());
    const toBigInt = z.bigint().or(toNumber).pipe(z.coerce.bigint());

    expect(toBigInt._def.out);
  });
});
