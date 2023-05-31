/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { env } from '@natu/env';

/**
 * This TypeScript function checks if a request is coming from Storyblok based on the presence of
 * specific query parameters.
 * @param {NextRequest} request - The `request` parameter is an object that represents an incoming HTTP
 * request in a Next.js application. It contains information about the request, such as the HTTP
 * method, headers, URL, and query parameters.
 * @returns A boolean value indicating whether the request is from Storyblok or not.
 */
const isRequestFromStoryblok = (request: NextRequest): boolean => {
  const { searchParams } = new URL(request.nextUrl.href);

  const id = searchParams.get('_storyblok');
  const space = searchParams.get('_storyblok_tk[space_id]');

  return !!id && !!space;
};

/**
 * This function redirects the user to a preview page for a specific slug if the URL matches a certain
 * pattern.
 * @param {NextRequest} request - `request` is an object that contains information about the incoming
 * HTTP request, such as the URL, headers, and query parameters. It is of type `NextRequest`, which is
 * a custom type defined by the Next.js framework.
 * @returns The function `enterPreview` returns a `NextResponse` object that redirects the user to a
 * preview URL. If the URL path starts with `/api`, the function returns `undefined`.
 */
const enterPreview = (request: NextRequest) => {
  const isApi = /^\/api/.test(request.nextUrl.pathname);
  /*
    Prevent redirect loop:
      /x (this file)
      /api/draft?slug=x (enter-preview.ts)
      /x redirects to
      /api/draft?slug=x redirects to
      etc.
  */
  if (isApi) {
    return NextResponse.next();
  }

  const firstPathElement = 1;
  const url = request.nextUrl.clone();
  url.pathname = '/api/draft';

  const slug = encodeURIComponent(request.nextUrl.pathname.slice(firstPathElement)) || '/';

  url.search = `${url.search}&slug=${slug}&secret=${env.NEXT_PUBLIC_STORYBLOK_TOKEN}`;

  return NextResponse.redirect(url);
};

/**
 * This TypeScript function checks if draft mode is enabled and enters preview mode if the request is
 * from Storyblok and draft mode is not already enabled.
 * @param {NextRequest} request - The `request` parameter is an object that represents the incoming
 * HTTP request. It contains information about the request such as the request method, headers,
 * cookies, query parameters, and request body. In this code snippet, the `request` parameter is used
 * to check if the request is coming from Storyblo
 * @returns The `previewMiddleware` function returns the result of calling the `enterPreview` function
 * if the request is from Storyblok and draft mode is not already enabled. If the conditions are not
 * met, the function does not return anything.
 */
export const previewMiddleware = (request: NextRequest) => {
  // Check if draft mode is already enabled
  const isDraftModeEnabled = request.cookies.has('__prerender_bypass');

  if (!isDraftModeEnabled && isRequestFromStoryblok(request)) {
    console.warn('isRequestFromStoryblok: entering preview mode');

    return enterPreview(request);
  }

  return NextResponse.next();
};
