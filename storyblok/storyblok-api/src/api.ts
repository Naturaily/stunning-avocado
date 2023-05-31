import { QueryClient } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';

import { env } from '@natu/env';
import { isDraftMode } from '@natu/storyblok-utils';

import { Sdk, SdkFunctionWrapper, getSdk } from './generated/graphql';

/* This code is creating an default object called `defaultRequestHeaders` that contains two properties: `token` and
`version`. The `token` property is set to the value of the `NEXT_PUBLIC_STORYBLOK_TOKEN` environment
variable, which is a string representing an access token for the Storyblok API. The `version`
property is set to the string value `'draft'`. These headers will be sent with each GraphQL request
made using the `graphql-request` library to the Storyblok API. */
const defaultRequestHeaders = {
  token: env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  version: 'published',
};

/* This code is creating a new instance of the `GraphQLClient` class from the `graphql-request`
library. It takes in two arguments: the first argument is the URL of the GraphQL API endpoint, which
is stored in the `NEXT_PUBLIC_STORYBLOK_API_URL` environment variable, and the second argument is an
object containing the headers to be sent with each request, which includes a token and a version.
This `graphqlRequestClient` instance can be used to make GraphQL queries to the Storyblok API. */
const graphqlRequestClient = new GraphQLClient(env.NEXT_PUBLIC_STORYBLOK_API_URL, {
  headers: defaultRequestHeaders,
});

/* This code is creating a new instance of the `QueryClient` class from the `react-query` library. The
`QueryClient` is a central object that manages caching, fetching, and updating data for queries made
with `react-query`. */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

interface GetApiInput {
  draftMode?: boolean;
}

/**
 * This TypeScript function returns an SDK with methods that make GraphQL requests, and sets headers
 * based on whether draft mode is enabled.
 * @param {GetApiInput}  - - `GetApiInput`: an object containing the `draftMode` boolean parameter,
 * which defaults to `false`.
 * @returns A function that returns an SDK object with methods for making GraphQL requests, wrapped in
 * a function that sets headers based on the `draftMode` parameter.
 */
export const getApi = ({ draftMode = false }: GetApiInput): Sdk => {
  const isDraftModeEnabled = isDraftMode(draftMode);

  const wrapper: SdkFunctionWrapper = action => {
    // set headers based on draftMode (previewMode)
    const requestHeaders = {
      version: isDraftModeEnabled ? 'draft' : 'published',
    };

    return action(requestHeaders); // pass headers to action function
  };

  // Return all methods from the SDK
  return getSdk(graphqlRequestClient, wrapper);
};
