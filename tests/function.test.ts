import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Function', () => {
  test('base', () => {
    const schema = z.function();

    expect(schema);
  });
  test('with args as param', () => {
    const schema = z.function(z.tuple([z.string(), z.number()]), z.boolean());

    expect(schema);
  });
  test('with args as method', () => {
    const schema = z.function().args(z.string(), z.number());

    expect(schema);
  });
  test('with returns as param', () => {
    const schema = z.function(z.tuple([z.string(), z.number()]), z.boolean());

    expect(schema);
  });
  test('with returns as method', () => {
    const schema = z.function().returns(z.boolean());

    expect(schema);
  });
});
