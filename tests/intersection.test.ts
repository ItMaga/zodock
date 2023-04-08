import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Intersection', () => {
  test('object', () => {
    const obj1 = z.object({ name: z.string() });
    const obj2 = z.object({ role: z.string() });

    const schema = z.intersection(obj1, obj2);

    expect(schema);
  });
  test('array', () => {
    const arr1 = z.array(z.string());
    const arr2 = z.array(z.string());

    const schema = z.intersection(arr1, arr2);

    expect(schema);
  });
  test('date', () => {
    const date1 = z.date();
    const date2 = z.date();

    const schema = z.intersection(date1, date2);

    expect(schema);
  });
  test('union', () => {
    const union1 = z.union([z.number(), z.string()]);
    const union2 = z.union([z.number(), z.boolean()]);
    const schema = z.intersection(union1, union2);

    expect(schema);
  });
});
