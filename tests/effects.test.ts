import { describe, test, expect as viExpect } from 'vitest';
import { z } from 'zod';
import { createMock } from '../lib';
import { expect } from './utils/expect';

describe('Effects', () => {
  test('transform string', () => {
    const schema = z.string().transform(val => val.toUpperCase());

    expect(schema.sourceType());
  });
  test('transform object', () => {
    const schema = z.object({ active: z.boolean() }).transform(val => ({ isActive: val.active }));

    expect(schema.sourceType());
  });
  test('transform object keys', () => {
    const schema = z.object({ active: z.boolean().transform(val => val ? 'yes' : 'no'), date: z.date().transform(val => val.toISOString()) });

    viExpect(createMock(schema).active).oneOf(['yes', 'no']);
    viExpect(createMock(schema).date).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);
  });
  test('transform array', () => {
    const schema = z.array(z.string()).transform(val => val.join(''));

    expect(schema.sourceType());
  });
});
