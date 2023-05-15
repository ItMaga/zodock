import { describe, test } from 'vitest';
import { z } from 'zod';
import { expect } from './utils/expect';

describe('Lazy', () => {
  test('primitive', () => {
    const schema = z.lazy(() => z.string());

    expect(schema);
  });

  test('recursive', () => {
    const baseCategorySchema = z.object({ name: z.string() });
    type Category = z.infer<typeof baseCategorySchema> & {
      subcategories: Category[]
    };
    const categorySchema: z.ZodType<Category> = baseCategorySchema.extend({
      subcategories: z.array(z.lazy(() => categorySchema)),
    });

    expect(categorySchema);
  });
});
