import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('String', () => {
  test('base', () => {
    const schema = z.string();

    expect(schema);
  });
  test('uuid', () => {
    const schema = z.string().uuid();

    expect(schema);
  });
  test('email', () => {
    const schema = z.string().email();

    expect(schema);
  });
  test('min', () => {
    const schema = z.string().min(10);

    expect(schema);
  });
  test('max', () => {
    const schema = z.string().max(10);

    expect(schema);
  });
  test('array', () => {
    const schema = z.string().array();

    expect(schema);
  });
  test('datetime', () => {
    const schema = z.string().datetime();

    expect(schema);
  });
  test('length', () => {
    const schema = z.string().length(10);

    expect(schema);
  });
  test('url', () => {
    const schema = z.string().url();

    expect(schema);
  });
});
