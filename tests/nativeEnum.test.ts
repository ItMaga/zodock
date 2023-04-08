import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Native enum', () => {
  test('base', () => {
    enum NativeEnum {
      A = 'a',
      B = 'b',
    }
    const schema = z.nativeEnum(NativeEnum);

    expect(schema);
  });
  test('by variable', () => {
    const Enum = {
      Apple: 'apple',
      Banana: 'banana',
      Cantaloupe: 3,
    } as const;
    const schema = z.nativeEnum(Enum);

    expect(schema);
  });
});
