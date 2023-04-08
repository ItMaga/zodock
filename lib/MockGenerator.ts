import { z } from 'zod';
import StringGenerator from './generators/StringGenerator';
import type BaseGenerator from './generators/BaseGenerator';
import NumberGenerator from './generators/NumberGenerator';
import BooleanGenerator from './generators/BooleanGenerator';
import LiteralGenerator from './generators/LiteralGenerator';
import DateGenerator from './generators/DateGenerator';
import NullGenerator from './generators/NullGenerator';
import UndefinedGenerator from './generators/UndefinedGenerator';
import ObjectGenerator from './generators/ObjectGenerator';
import ArrayGenerator from './generators/ArrayGenerator';
import UnionGenerator from './generators/UnionGenerator';
import TuppleGenerator from './generators/TuppleGenerator';
import EffectsGenerator from './generators/EffectsGenerator';
import OptionalGenerator from './generators/OptionalGenerator';

export default class MockGenerator<T extends z.ZodTypeAny> {
  private generator: BaseGenerator<z.infer<T>>;
  private schema: T;

  constructor(schema: T) {
    this.schema = schema;

    if (this.schema instanceof z.ZodString) {
      this.generator = new StringGenerator();
    }
    else if (this.schema instanceof z.ZodNumber) {
      this.generator = new NumberGenerator();
    }
    else if (this.schema instanceof z.ZodBoolean) {
      this.generator = new BooleanGenerator();
    }
    else if (this.schema instanceof z.ZodLiteral) {
      this.generator = new LiteralGenerator();
    }
    else if (this.schema instanceof z.ZodDate) {
      this.generator = new DateGenerator();
    }
    else if (this.schema instanceof z.ZodNull) {
      this.generator = new NullGenerator();
    }
    else if (this.schema instanceof z.ZodUndefined) {
      this.generator = new UndefinedGenerator();
    }
    else if (this.schema instanceof z.ZodAny) {
      this.generator = new StringGenerator();
    }
    else if (this.schema instanceof z.ZodUnknown) {
      this.generator = new StringGenerator();
    }
    else if (this.schema instanceof z.ZodObject) {
      this.generator = new ObjectGenerator();
    }
    else if (this.schema instanceof z.ZodArray) {
      this.generator = new ArrayGenerator();
    }
    else if (this.schema instanceof z.ZodUnion) {
      this.generator = new UnionGenerator();
    }
    else if (this.schema instanceof z.ZodTuple) {
      this.generator = new TuppleGenerator();
    }
    else if (this.schema instanceof z.ZodEffects) {
      this.generator = new EffectsGenerator();
    }
    else if (this.schema instanceof z.ZodOptional) {
      this.generator = new OptionalGenerator();
    }
    else {
      throw new TypeError(`Unsupported schema type: ${this.schema.constructor.name}`);
    }
  }

  public generate(): z.infer<T> {
    return this.generator.generate(this.schema);
  }
}
