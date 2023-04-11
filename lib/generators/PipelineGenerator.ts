import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import type BaseGenerator from './BaseGenerator';

export default class PipelineGenerator<T extends z.ZodPipeline<z.ZodTypeAny, z.ZodTypeAny>> implements BaseGenerator<T> {
  public generate(schema: T): z.TypeOf<T> {
    const { out: outSchema } = schema._def;
    const outGenerated = new MockGenerator(outSchema).generate();
    return outGenerated;
  }
}
