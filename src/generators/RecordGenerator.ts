import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import BaseGenerator from './BaseGenerator';

export default class RecordGenerator<T extends z.ZodTypeAny> extends BaseGenerator<T> {
  public generate(schema: T) {
    const keyGenerated = new MockGenerator(schema._def.keyType, { extensions: this.extensions }).generate();
    const valueGenerated = new MockGenerator(schema._def.valueType, { extensions: this.extensions }).generate();

    return { [keyGenerated]: valueGenerated };
  }
}
