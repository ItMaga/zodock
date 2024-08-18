import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import BaseGenerator from './BaseGenerator';

export default class EffectsGenerator<T extends z.ZodEffects<any>> extends BaseGenerator<T> {
  public generate(schema: T) {
    if (schema._def.effect.type === 'refinement') {
      schema._def.effect.refinement = () => true;
    }

    const mockGenerator = new MockGenerator(schema.innerType(), { extensions: this.extensions });
    return mockGenerator.generate();
  }
}
