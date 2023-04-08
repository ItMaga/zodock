import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Optional', () => {
  test('string', () => {
    const schema = z.string().optional();

    expect(schema);
  });
  test('number', () => {
    const schema = z.number().optional();

    expect(schema);
  });
  test('boolean', () => {
    const schema = z.boolean().optional();

    expect(schema);
  });
  test('date', () => {
    const schema = z.date().optional();

    expect(schema);
  });
  test('object', () => {
    const schema = z.object({ foo: z.string().optional() }).optional();

    expect(schema);
  });
  test('array', () => {
    const schema = z.array(z.string().optional()).optional();

    expect(schema);
  });
});
