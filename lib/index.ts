import type { z } from 'zod';
import MockGenerator from './MockGenerator';

function createMock<Schema extends z.ZodTypeAny>(schema: Schema) {
  const mockGenerator = new MockGenerator(schema);
  return mockGenerator.generate();
}

export { createMock };
