import type { ZodRawShape, z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class ObjectGenerator<T extends ZodRawShape, U extends z.ZodObject<T>> implements BaseGenerator<U> {
  public generate(schema: U) {
    return Object.entries(schema._def.shape()).reduce((acc, [key, value]) => {
      const mockGenerator = new MockGenerator(value);
      acc[key as keyof z.infer<U>] = mockGenerator.generate();
      return acc;
    }, {} as z.infer<U>);
  }
}
