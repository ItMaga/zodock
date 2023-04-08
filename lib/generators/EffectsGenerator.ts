import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class EffectsGenerator<T extends z.ZodEffects<any>> implements BaseGenerator<T> {
  public generate(schema: T) {
    const mockGenerator = new MockGenerator(schema.innerType());
    const generated = mockGenerator.generate();
    return schema.parse(generated);
  }
}
