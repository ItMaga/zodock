import type { ZodRawShape, z } from 'zod';
import MockGenerator from '../MockGenerator';
import { DepthLimitError } from '../errors/DepthLimitError';
import type BaseGenerator from './BaseGenerator';

export default class ObjectGenerator<T extends ZodRawShape, U extends z.ZodObject<T>> implements BaseGenerator<U> {
  public generate(schema: U) {
    const generated: z.infer<U> = {} as z.infer<U>;
    Object.entries(schema._def.shape()).forEach(([key, value]) => {
      try {
        const mockGenerator = new MockGenerator(value);
        generated[key as keyof z.infer<U>] = mockGenerator.generate();
      }
      catch (e) {
        if (e instanceof DepthLimitError) {
          return;
        }
        throw e;
      }
    });

    return generated;
  }
}
