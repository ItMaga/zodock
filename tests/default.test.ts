import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Default', () => {
  test('string', () => {
    const schema = z.string().default('foo');

    expect(schema);
  });
  test('number', () => {
    const schema = z.number().default(42);

    expect(schema);
  });
  test('boolean', () => {
    const schema = z.boolean().default(true);

    expect(schema);
  });
  test('date', () => {
    const schema = z.date().default(new Date());

    expect(schema);
  });
  test('object', () => {
    const schema = z.object({ foo: z.string().default('foo') }).default({ foo: 'foo' });

    expect(schema);
  });
  test('array', () => {
    const schema = z.array(z.string()).default(['foo']);

    expect(schema);
  });
});
