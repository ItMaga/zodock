import type { ZodReadonly, ZodTypeAny } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class ReadonlyGenerator<T extends ZodTypeAny, U extends ZodReadonly<T>> implements BaseGenerator<U> {
  public generate(schema: U) {
    const mockGenerator = new MockGenerator(schema._def.innerType);
    return Object.freeze(mockGenerator.generate());
  }
}
