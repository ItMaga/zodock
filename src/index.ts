import type { z } from 'zod';
import MockGenerator from './MockGenerator';
import type { GeneratorOptions } from './types';
import Extension from './extensions';

function createMock<Schema extends z.ZodTypeAny>(schema: Schema, options?: GeneratorOptions<Schema>): z.infer<typeof schema> {
  if (typeof schema === 'function') {
    throw new TypeError('You must pass a schema to createMock');
  }

  const mockGenerator = new MockGenerator(schema, options);
  return schema.parse(mockGenerator.generate());
}

export { createMock, Extension };
