import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class UnionGenerator<TOptions extends z.ZodUnionOptions, T extends z.ZodUnion<TOptions>> implements BaseGenerator<T> {
  public generate(schema: T) {
    const { options } = schema._def;
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];

    const mockGenerator = new MockGenerator(randomOption);
    return mockGenerator.generate();
  }
}
