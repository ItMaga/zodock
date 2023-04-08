import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Effects', () => {
  test('transform string', () => {
    const schema = z.string().transform(val => val.toUpperCase());

    expect(schema);
  });
  test('transform object', () => {
    const schema = z.object({ active: z.boolean() }).transform(val => ({ isActive: val.active }));

    expect(schema);
  });
  test('transform object keys', () => {
    const schema = z.object({ active: z.boolean().transform(val => val ? 'yes' : 'no'), date: z.date().transform(val => val.toISOString()) });

    expect(schema);
  });
  test('transform array', () => {
    const schema = z.array(z.string()).transform(val => val.join(''));

    expect(schema);
  });
});
