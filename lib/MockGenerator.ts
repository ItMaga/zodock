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
import VoidGenerator from './generators/VoidGenerator';
import EnumGenerator from './generators/EnumGenerator';
import NativeEnumGenerator from './generators/NativeEnumGenerator';
import NullableGenerator from './generators/NullableGenerator';
import DiscriminatedUnionGenerator from './generators/DiscriminatedUnionGenerator';
import IntersectionGenerator from './generators/IntersectionGenerator';
import DefaultGenerator from './generators/DefaultGenerator';
import CatchGenerator from './generators/CatchGenerator';
import PromiseGenerator from './generators/PromiseGenerator';
import MapGenerator from './generators/MapGenerator';
import SetGenerator from './generators/SetGenerator';
import RecordGenerator from './generators/RecordGenerator';
import PipelineGenerator from './generators/PipelineGenerator';
import BrandedGenerator from './generators/BrandedGenerator';
import FunctionGenerator from './generators/FunctionGenerator';
import LazyGenerator from './generators/LazyGenerator';
import { DepthLimitError } from './errors/DepthLimitError';

const _schemasCache = new WeakMap<z.ZodTypeAny, any>();
export default class MockGenerator<T extends z.ZodTypeAny> {
  private generator: BaseGenerator<TypeOf<T>>;
  private schema: T;
  private readonly MAX_DEPTH = 3;

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
      ZodVoid: VoidGenerator,
      ZodEnum: EnumGenerator,
      ZodNativeEnum: NativeEnumGenerator,
      ZodNullable: NullableGenerator,
      ZodDiscriminatedUnion: DiscriminatedUnionGenerator,
      ZodIntersection: IntersectionGenerator,
      ZodDefault: DefaultGenerator,
      ZodCatch: CatchGenerator,
      ZodPromise: PromiseGenerator,
      ZodMap: MapGenerator,
      ZodSet: SetGenerator,
      ZodRecord: RecordGenerator,
      ZodPipeline: PipelineGenerator,
      ZodBranded: BrandedGenerator,
      ZodFunction: FunctionGenerator,
      ZodLazy: LazyGenerator,
    };

    if (this.schema._def.typeName in generatorMap) {
      this.generator = new generatorMap[this.schema._def.typeName as ZodFirstPartyTypeKind]();
      return;
    }

    throw new TypeError(`Unsupported schema type: ${this.schema.constructor.name}`);
  }

  public generate(): z.infer<T> {
    this.incrementRecursionCount();

    try {
      const generated = this.generator.generate(this.schema);
      return generated;
    }
    finally {
      this.decrementRecursionCount();
    }
  }

  private incrementRecursionCount(): void {
    const recursionCount = _schemasCache.get(this.schema) ?? 0;
    if (recursionCount > this.MAX_DEPTH) {
      throw new DepthLimitError();
    }

    _schemasCache.set(this.schema, recursionCount + 1);
  }

  private decrementRecursionCount(): void {
    const recursionCount = _schemasCache.get(this.schema) ?? 0;
    _schemasCache.set(this.schema, recursionCount - 1);
  }
}
