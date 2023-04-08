import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    'lib/index',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});
