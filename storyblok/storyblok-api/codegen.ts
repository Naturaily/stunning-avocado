import { CodegenConfig } from '@graphql-codegen/cli';

const { NEXT_PUBLIC_STORYBLOK_TOKEN } = process.env;

const config: CodegenConfig = {
  schema: [
    {
      'https://gapi.storyblok.com/v1/api': {
        headers: {
          Token: NEXT_PUBLIC_STORYBLOK_TOKEN as string,
          Version: 'draft',
        },
      },
    },
  ],
  overwrite: true,
  config: {
    namingConvention: {
      typeNames: 'change-case-all#pascalCase',
    },
  },
  documents: ['./src/**/*.graphql'],
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        {
          add: {
            content: '/* eslint-disable @typescript-eslint/no-unused-vars */',
          },
        },
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      hooks: {
        afterOneFileWrite: ['prettier --write', 'eslint --fix'],
      },
    },
  },
};

export default config;
