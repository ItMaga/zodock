import type { z } from 'zod';
import type BaseGenerator from './BaseGenerator';

export default class SymbolGenerator<T extends z.ZodSymbol> implements BaseGenerator<T> {
  public generate() {
    return Symbol('symbol');
  }
}
