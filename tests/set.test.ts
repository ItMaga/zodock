import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Set', () => {
  test('primitive', () => {
    const schema = z.set(z.string());

    expect(schema);
  });
  test('object', () => {
    const schema = z.set(z.object({ a: z.string() }));

    expect(schema);
  });
  test('with min', () => {
    const schema = z.set(z.string()).min(2);

    expect(schema);
  });
  test('with max', () => {
    const schema = z.set(z.string()).max(2);

    expect(schema);
  });
  test('with size', () => {
    const schema = z.set(z.string()).size(5);

    expect(schema);
  });
  test('nonempty', () => {
    const schema = z.set(z.string()).nonempty();

    expect(schema);
  });
});
