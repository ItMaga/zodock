import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class RecordGenerator<T extends z.ZodRecord> implements BaseGenerator<T> {
  public generate(schema: T) {
    const keyGenerated = new MockGenerator(schema._def.keyType).generate();
    const valueGenerated = new MockGenerator(schema._def.valueType).generate();

    return { [keyGenerated]: valueGenerated };
  }
}
