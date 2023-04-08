import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Number', () => {
  test('base', () => {
    const schema = z.number();

    expect(schema);
  });
  test('min or gt/gte', () => {
    const schema = z.number().min(10);

    expect(schema);
  });
  test('max or lt/lte', () => {
    const schema = z.number().max(10);

    expect(schema);
  });
  test('integer', () => {
    const schema = z.number().int().min(50);

    expect(schema);
  });
  test('finite', () => {
    const schema = z.number().finite();

    expect(schema);
  });
  test('positive', () => {
    const schema = z.number().positive();

    expect(schema);
  });
  test('nonpositive', () => {
    const schema = z.number().nonpositive();

    expect(schema);
  });
  test('negative', () => {
    const schema = z.number().negative();

    expect(schema);
  });
  test('nonnegative', () => {
    const schema = z.number().nonnegative();

    expect(schema);
  });
  test('multipleOf', () => {
    const schema = z.number().multipleOf(10);

    expect(schema);
  });
});
