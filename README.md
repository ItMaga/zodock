# Zodock

![npm](https://img.shields.io/npm/v/zodock?color=2f68b7)
![npm bundle size](https://img.shields.io/bundlephobia/min/zodock?color=2f68b7)
![NPM](https://img.shields.io/npm/l/zodock)
![npm](https://img.shields.io/npm/dt/zodock)

The mocking library for TypeScript-first schema validation [Zod](https://zod.dev/), creates a mock object based on the schema. It makes it easy to create mock data for testing purposes, to create mock data for the API request or response, and etc.

## Installation

```bash
npm install -D zodock
```

## Usage
  
```ts
import { createMock } from 'zodock';

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

createMock(schema); // { name: string, age: number }
```

## Use cases

### Mocking data for testing

```ts
import { createMock } from 'zodock';

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

describe('test', () => {
  const mockSchema = createMock(schema);

  const apiMock = jest.fn().mockResolvedValue(mockSchema);

  it('should return mock data', async () => {
    const result = await apiMock();

    expect(result).toEqual(mockSchema);
  });
});
```

### Mocking data for API request

```ts
import { createMock } from 'zodock';

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

const mockSchema = createMock(schema);

export const api = {
  get: () => {
    return mockSchema;
  }
};
```

or you can imitate axios response

```ts
import { createMock } from 'zodock';

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

export const api = {
  get: () => {
    return new Promise(resolve =>
      resolve({
        status: 200,
        statusText: 'OK',
        headers: {},
        data: createMock(schema),
        config: {},
      }),
    );
  }
};
```

## TODO

- ZodNever

## License

[MIT](./LICENSE) License © 2023 [Magomed Chemurziev](https://github.com/ItMaga)