import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class BrandedGenerator<T extends z.ZodBranded<z.ZodTypeAny, string | number | symbol>> implements BaseGenerator<T> {
  public generate(schema: T): z.infer<typeof schema> {
    const mockGenerator = new MockGenerator(schema.unwrap());
    return mockGenerator.generate();
  }
}
