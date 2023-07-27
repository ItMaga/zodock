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
  test('emoji', () => {
    const schema = z.string().emoji();

    expect(schema);
  });
  test('ip', () => {
    const schemaV4 = z.string().ip({ version: 'v4' });
    const schemaV6 = z.string().ip({ version: 'v6' });

    expect(schemaV4);
    expect(schemaV6);
  });
  test('startsWith', () => {
    const schema = z.string().startsWith('__MARK__');

    expect(schema);
  });
  test('endsWith', () => {
    const schema = z.string().endsWith('__MARK__');

    expect(schema);
  });
  test('includes', () => {
    const schema = z.string().includes('__MARK__');

    expect(schema);
  });
});
