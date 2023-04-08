import { randomUUID } from 'node:crypto';
import type { z } from 'zod';
import type BaseGenerator from './BaseGenerator';

export default class StringGenerator<T extends z.ZodString> implements BaseGenerator<T> {
  public generate(schema: T) {
    let string: z.infer<T> = this.getRandomString();

    if (schema._def.checks?.length > 0) {
      for (const check of schema._def.checks) {
        switch (check.kind) {
          case 'uuid':
            string = randomUUID();
            break;
          case 'email':
            string = this.getRandomEmail();
            break;
          case 'datetime':
            string = new Date().toISOString();
            break;
          case 'url':
            string = `https://${this.getRandomString()}.com`;
            break;
          case 'min':
          case 'max':
          case 'length':
            string = this.getRandomString().substring(0, check.value);
            break;
        }
      }
    }

    return string;
  }

  public getRandomEmail(): z.infer<T> {
    const email = `${this.getRandomString()}@${this.getRandomString()}.com`;
    return email;
  }

  public getRandomString(): string {
    return Array.from({ length: 50 }, () => Math.floor(Math.random() * 36).toString(36)).join('');
  }
}
