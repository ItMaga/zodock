import type { ZodDiscriminatedUnionOption, z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class DiscriminatedUnionGenerator<T extends z.ZodDiscriminatedUnion<string, ZodDiscriminatedUnionOption<string>[]>> implements BaseGenerator<T> {
  public generate(schema: T) {
    const { optionsMap } = schema._def;
    const keys = Array.from(optionsMap.keys());
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    const mockGenerator = new MockGenerator(optionsMap.get(randomKey)!);
    return mockGenerator.generate();
  }
}
