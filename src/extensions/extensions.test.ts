import { describe, expect, test } from 'vitest';
import { ZodString, z } from 'zod';
import { createMock } from '..';
import Extension from '.';

describe('Extensions', () => {
  test('with constructor', () => {
    const extension = new Extension({
      schema: ZodString,
      output: () => 'Hello, World!',
    });

    const mock = createMock(z.string(), { extensions: [extension] });

    expect(mock).toBe('Hello, World!');
  });

  test('with instance', () => {
    const schema = z.string();

    const extension = new Extension({
      schema,
      output: () => 'Hello, World!',
    });

    const mock = createMock(schema, { extensions: [extension] });

    expect(mock).toBe('Hello, World!');
  });
});
