import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Date', () => {
  test('base', () => {
    const schema = z.date();

    expect(schema);
  });
  test('min', () => {
    const now = new Date();
    const endOfTomorrow = new Date(0);
    endOfTomorrow.setFullYear(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    endOfTomorrow.setHours(23, 59, 59, 999);

    const schema = z.date().min(endOfTomorrow);

    expect(schema);
  });
  test('max', () => {
    const now = new Date();
    const endOfYesterday = new Date(0);
    endOfYesterday.setFullYear(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    endOfYesterday.setHours(23, 59, 59, 999);

    const schema = z.date().max(endOfYesterday);

    expect(schema);
  });
});
