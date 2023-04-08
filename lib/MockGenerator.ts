import type { TypeOf, ZodFirstPartyTypeKind, z } from 'zod';
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
import NaNGenerator from './generators/NaNGenerator';
import BigIntGenerator from './generators/BigIntGenerator';
import SymbolGenerator from './generators/SymbolGenerator';

export default class MockGenerator<T extends z.ZodTypeAny> {
  private generator: BaseGenerator<TypeOf<T>>;
  private schema: T;

  constructor(schema: T) {
    this.schema = schema;

    const generatorMap: Partial<Record<ZodFirstPartyTypeKind, any>> = {
      ZodString: StringGenerator,
      ZodNumber: NumberGenerator,
      ZodBoolean: BooleanGenerator,
      ZodLiteral: LiteralGenerator,
      ZodDate: DateGenerator,
      ZodNull: NullGenerator,
      ZodUndefined: UndefinedGenerator,
      ZodAny: StringGenerator,
      ZodUnknown: StringGenerator,
      ZodObject: ObjectGenerator,
      ZodArray: ArrayGenerator,
      ZodUnion: UnionGenerator,
      ZodTuple: TuppleGenerator,
      ZodEffects: EffectsGenerator,
      ZodOptional: OptionalGenerator,
      ZodNaN: NaNGenerator,
      ZodBigInt: BigIntGenerator,
      ZodSymbol: SymbolGenerator,
    };
    if (this.schema._def.typeName in generatorMap) {
      this.generator = new generatorMap[this.schema._def.typeName as ZodFirstPartyTypeKind]();
      return;
    }

    throw new TypeError(`Unsupported schema type: ${this.schema.constructor.name}`);
  }

  public generate(): z.infer<T> {
    return this.generator.generate(this.schema);
  }
}
