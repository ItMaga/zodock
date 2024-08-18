import type { z } from 'zod';

interface ZodConstructor<TSchema extends z.ZodTypeAny> {

  new(...args: any[]): TSchema
}

interface Options<T extends z.ZodTypeAny> {
  schema: T | ZodConstructor<T>
  output: () => z.infer<T>
}

export default class Extension<T extends z.ZodTypeAny> {
  private schema: T | ZodConstructor<T>;
  private output: () => z.infer<T>;

  constructor(options: Options<T>) {
    this.schema = options.schema;
    this.output = options.output;
  }

  public isTypeOf(schema: z.ZodTypeAny) {
    return typeof this.schema === 'function' ? schema instanceof this.schema : schema === this.schema;
  }

  public generate() {
    return this.output();
  }
}
