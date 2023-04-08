import { describe, test } from 'vitest';
import { z } from 'zod';
import { endOfTomorrow, endOfYesterday } from 'date-fns';
import { expect } from './utils/expect';

describe('Date', () => {
  test('base', () => {
    const schema = z.date();

    expect(schema);
  });
  test('min', () => {
    const schema = z.date().min(endOfTomorrow());

    expect(schema);
  });
  test('max', () => {
    const schema = z.date().max(endOfYesterday());

    expect(schema);
  });
});
