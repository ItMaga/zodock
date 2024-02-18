export class DepthLimitError extends Error {
  constructor() {
    super('Depth limit reached');
    this.name = 'DepthLimitError';
  }
}
