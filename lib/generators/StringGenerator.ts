import type { z } from 'zod';
import type BaseGenerator from './BaseGenerator';

export default class StringGenerator<T extends z.ZodString> implements BaseGenerator<T> {
  public generate(schema: T) {
    let string: z.infer<T> = this.getRandomString();

    if (schema._def.checks && schema._def.checks.length > 0) {
      for (const check of schema._def.checks) {
        switch (check.kind) {
          case 'uuid':
            string = this.getRandomUUID();
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
          case 'emoji':
            string = '😀';
            break;
          case 'ip':
            string = this.getRandomIP();
            break;
          case 'startsWith':
            string = `${check.value}${string}`;
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

  public getRandomUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  public getRandomIP(): string {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
  }
}
