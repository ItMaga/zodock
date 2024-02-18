import type { z } from 'zod';
import MockGenerator from './MockGenerator';

function createMock<Schema extends z.ZodTypeAny>(schema: Schema): z.infer<typeof schema> {
  if (typeof schema === 'function') {
    throw new TypeError('You must pass a schema to createMock');
  }

  const mockGenerator = new MockGenerator(schema);
  return schema.parse(mockGenerator.generate());
}

export { createMock };
