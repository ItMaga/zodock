import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import BaseGenerator from './BaseGenerator';

export default class UnionGenerator<TOptions extends z.ZodUnionOptions, T extends z.ZodUnion<TOptions>> extends BaseGenerator<T> {
  public generate(schema: T) {
    const { options } = schema._def;
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];

    const mockGenerator = new MockGenerator(randomOption, { extensions: this.extensions });
    return mockGenerator.generate();
  }
}
