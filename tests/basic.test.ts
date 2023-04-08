import { describe, expect, it } from 'vitest';
import { z } from 'zod';
import { createMock } from '../lib';

describe('test', () => {
  it('any', () => {
    const schema = z.any();

    expect(typeof createMock(schema)).toBe('string');
  });
  it('unknown', () => {
    const schema = z.unknown();

    expect(typeof createMock(schema)).toBe('string');
  });
});
