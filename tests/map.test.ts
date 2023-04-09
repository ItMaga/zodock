import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Map', () => {
  test('primitive', () => {
    const schema = z.map(z.string(), z.number());

    expect(schema);
  });
  test('object value', () => {
    const schema = z.map(z.string(), z.object({ foo: z.string() }));

    expect(schema);
  });
  test('object key', () => {
    const schema = z.map(z.object({ foo: z.string() }), z.number());

    expect(schema);
  });
  test('array value', () => {
    const schema = z.map(z.string(), z.array(z.string()));

    expect(schema);
  });
  test('array key', () => {
    const schema = z.map(z.array(z.string()), z.number());

    expect(schema);
  });
});
