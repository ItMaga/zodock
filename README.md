# Zodock

[![NPM version](https://img.shields.io/npm/v/zodock?color=2f68b7&label=)](https://www.npmjs.com/package/zodock)

The mocking library for TypeScript-first schema validation [Zod](https://zod.dev/), creates a mock object based on the schema. It makes it easy to create mock data for testing purposes.

## Installation

```bash
npm install -D zodock
```

## Usage

```ts
import { createMock } from 'zodock';

const schema = z.string();

createMock(schema); // string
```

or
  
```ts
import { createMock } from 'zodock';

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

createMock(schema); // { name: string, age: number }
```

## TODO

- ZodNever
- ZodFunction
- ZodLazy
- ZodBranded
- ZodPipeline