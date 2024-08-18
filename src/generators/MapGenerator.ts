import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import BaseGenerator from './BaseGenerator';

export default class MapGenerator<T extends z.ZodMap> extends BaseGenerator<T> {
  public generate(schema: T) {
    const keyGenerator = new MockGenerator(schema._def.keyType, { extensions: this.extensions });
    const generatedKey = keyGenerator.generate();

    const valueGenerator = new MockGenerator(schema._def.valueType, { extensions: this.extensions });
    const generatedValue = valueGenerator.generate();

    return new Map([[generatedKey, generatedValue]]);
  }
}
