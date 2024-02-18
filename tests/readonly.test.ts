import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Readonly', () => {
  test('base', () => {
    const object = z.object({ foo: z.string(), bar: z.number() }).readonly();
    expect(object);

    const array = z.array(z.string()).readonly();
    expect(array);

    const string = z.string().readonly();
    expect(string);

    const number = z.number().readonly();
    expect(number);

    const boolean = z.boolean().readonly();
    expect(boolean);
  });
});
