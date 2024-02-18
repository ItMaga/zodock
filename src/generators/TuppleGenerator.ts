import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class TuppleGenerator<T extends z.ZodTuple> implements BaseGenerator<T> {
  public generate(schema: T) {
    return schema._def.items.map((item) => {
      const mockGenerator = new MockGenerator(item);
      return mockGenerator.generate();
    }) as z.infer<T>;
  }
}
