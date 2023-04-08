import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Array', () => {
  test('base', () => {
    const schema = z.array(z.string());

    expect(schema);
  });
  test('alternatives', () => {
    const schema = z.array(z.string().or(z.number()));

    expect(schema);
  });
  test('nonempty', () => {
    const schema = z.array(z.string()).nonempty();

    expect(schema);
  });
  test('min', () => {
    const schema = z.array(z.string()).min(10);

    expect(schema);
  });
  test('max', () => {
    const schema = z.array(z.string()).max(10);

    expect(schema);
  });
  test('length', () => {
    const schema = z.array(z.string()).length(10);

    expect(schema);
  });
});
