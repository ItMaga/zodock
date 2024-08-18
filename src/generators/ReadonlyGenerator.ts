import type { ZodTypeAny } from 'zod';
import MockGenerator from '../MockGenerator';
import BaseGenerator from './BaseGenerator';

export default class ReadonlyGenerator<T extends ZodTypeAny> extends BaseGenerator<T> {
  public generate(schema: T) {
    const mockGenerator = new MockGenerator(schema._def.innerType, { extensions: this.extensions });
    return Object.freeze(mockGenerator.generate());
  }
}
