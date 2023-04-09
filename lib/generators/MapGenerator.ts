import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class MapGenerator<T extends z.ZodMap> implements BaseGenerator<T> {
  public generate(schema: T) {
    const keyGenerator = new MockGenerator(schema._def.keyType);
    const generatedKey = keyGenerator.generate();

    const valueGenerator = new MockGenerator(schema._def.valueType);
    const generatedValue = valueGenerator.generate();

    return new Map([[generatedKey, generatedValue]]);
  }
}
