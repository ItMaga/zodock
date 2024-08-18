import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import BaseGenerator from './BaseGenerator';

export default class TuppleGenerator<T extends z.ZodTuple> extends BaseGenerator<T> {
  public generate(schema: T) {
    return schema._def.items.map((item) => {
      const mockGenerator = new MockGenerator(item, { extensions: this.extensions });
      return mockGenerator.generate();
    }) as z.infer<T>;
  }
}
