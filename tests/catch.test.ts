import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Catch', () => {
  test('string', () => {
    const schema = z.string().catch('error');

    expect(schema);
  });
  test('number', () => {
    const schema = z.number().catch(1);

    expect(schema);
  });
  test('boolean', () => {
    const schema = z.boolean().catch(true);

    expect(schema);
  });
  test('date', () => {
    const schema = z.date().catch(new Date());

    expect(schema);
  });
  test('object', () => {
    const schema = z.object({ foo: z.string().catch('') }).catch({ foo: '' });

    expect(schema);
  });
  test('array', () => {
    const schema = z.array(z.string().catch('')).catch(['']);

    expect(schema);
  });
  test('union', () => {
    const schema = z.union([z.string().catch(''), z.number().catch(1)]).catch('');

    expect(schema);
  });
  test('tuple', () => {
    const schema = z.tuple([z.string().catch(''), z.number().catch(1)]).catch(['', 1]);

    expect(schema);
  });
  test('optional', () => {
    const schema = z.string().optional().catch('');

    expect(schema);
  });
  test('nullable', () => {
    const schema = z.string().nullable().catch('');

    expect(schema);
  });
  test('undefined', () => {
    const schema = z.undefined().catch(undefined);

    expect(schema);
  });
});
