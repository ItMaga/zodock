import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Promise', () => {
  test('string', () => {
    const schema = z.promise(z.string());

    expect(schema);
  });
  test('number', () => {
    const schema = z.promise(z.number());

    expect(schema);
  });
  test('boolean', () => {
    const schema = z.promise(z.boolean());

    expect(schema);
  });
  test('object', () => {
    const schema = z.promise(z.object({ foo: z.string() }));

    expect(schema);
  });
  test('nullable', () => {
    const schema = z.promise(z.string()).nullable();

    expect(schema);
  });
});
