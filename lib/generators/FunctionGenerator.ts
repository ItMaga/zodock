import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class FunctionGenerator<T extends z.ZodFunction<z.ZodTuple<any, any>, z.ZodTypeAny>> implements BaseGenerator<T> {
  public generate(schema: T): z.infer<typeof schema> {
    const mockGenerator = new MockGenerator(schema._def.returns);
    return () => mockGenerator.generate();
  }
}
