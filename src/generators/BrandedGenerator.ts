import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import BaseGenerator from './BaseGenerator';

export default class BrandedGenerator<T extends z.ZodBranded<z.ZodTypeAny, string | number | symbol>> extends BaseGenerator<T> {
  public generate(schema: T): z.infer<typeof schema> {
    const mockGenerator = new MockGenerator(schema.unwrap(), { extensions: this.extensions });
    return mockGenerator.generate();
  }
}
