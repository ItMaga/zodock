import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Lazy', () => {
  test('primitive', () => {
    const schema = z.lazy(() => z.string());

    expect(schema);
  });
});
