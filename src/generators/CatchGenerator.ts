import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import BaseGenerator from './BaseGenerator';

export default class CatchGenerator<T extends z.ZodCatch<z.ZodTypeAny>> extends BaseGenerator<T> {
  public generate(schema: T) {
    const mockGenerator = new MockGenerator(schema._def.innerType, { extensions: this.extensions });
    return mockGenerator.generate();
  }
}
