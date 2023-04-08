import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Literal', () => {
  test('string', () => {
    const schema = z.literal('literal');

    expect(schema);
  });
  test('number', () => {
    const schema = z.literal(1);

    expect(schema);
  });
  test('boolean', () => {
    const schema = z.literal(true);

    expect(schema);
  });
  test('null', () => {
    const schema = z.literal(null);

    expect(schema);
  });
  test('undefined', () => {
    const schema = z.literal(undefined);

    expect(schema);
  });
  test('bigint', () => {
    const schema = z.literal(1n);

    expect(schema);
  });
});
