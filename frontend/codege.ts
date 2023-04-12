import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  // ...
  generates: {
    'path/to/file.ts': {
      plugins: ['typescript'],
      config: {
        avoidOptionals: true,
      },
    },
  },
};
export default config;
