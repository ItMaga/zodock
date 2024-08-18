import type { z } from 'zod';
import BaseGenerator from './BaseGenerator';

export default class SymbolGenerator<T extends z.ZodSymbol> extends BaseGenerator<T> {
  public generate() {
    return Symbol('symbol');
  }
}
