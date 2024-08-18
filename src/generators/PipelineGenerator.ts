import type { z } from 'zod';
import MockGenerator from '../MockGenerator';
import BaseGenerator from './BaseGenerator';

export default class PipelineGenerator<T extends z.ZodPipeline<z.ZodTypeAny, z.ZodTypeAny>> extends BaseGenerator<T> {
  public generate(schema: T): z.TypeOf<T> {
    const { out: outSchema } = schema._def;
    const outGenerated = new MockGenerator(outSchema, { extensions: this.extensions }).generate();
    return outGenerated;
  }
}
