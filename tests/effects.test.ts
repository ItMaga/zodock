import { describe, test, expect as viExpect } from 'vitest';
import { z } from 'zod';
import { createMock } from '../src';
import { expect } from './utils/expect';

describe('Effects', () => {
  test('transform string', () => {
    const schema = z.string().transform(val => val.toUpperCase());

    expect(schema);
  });
  test('transform object', () => {
    const schema = z.object({ active: z.boolean() }).transform(val => ({ isActive: val.active }));

    expect(schema.sourceType());
  });
  test('transform object keys', () => {
    const schema = z.object({ active: z.boolean().transform(val => val ? 'yes' : 'no'), date: z.date().transform(val => val.toISOString()) }).transform(val => val);

    viExpect(createMock(schema).active).oneOf(['yes', 'no']);
    viExpect(createMock(schema).date).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);
  });
  test('transform array', () => {
    const schema = z.array(z.string()).transform(val => val.join(''));

    expect(schema.sourceType());
  });
  test('multiple transform', () => {
    const schemaBase = z.object({
      string: z.string(),
      data: z.object({ foo: z.string(), bar: z.string() }).transform(({ foo, bar }) => ({ bar, baz: foo })),
    });
    const schemaExtended = schemaBase
      .extend({ type: z.string(), forTransform: z.string() })
      .transform(({ forTransform, ...rest }) => ({ transformed: forTransform, ...rest }));

    viExpect(createMock(schemaExtended).transformed).toBeDefined();
    viExpect(createMock(schemaExtended).data.baz).toBeDefined();
  });

  test('refine', () => {
    const isValidId = (id: string): boolean => id.length > 100;
    const schema = z.string().refine(isValidId);

    expect(schema.sourceType());
  });

  test('preprocess', () => {
    const schema = z.preprocess(val => String(val), z.string());

    expect(schema.sourceType());
  });
});
