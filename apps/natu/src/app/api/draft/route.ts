import { draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { env } from '@natu/env';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);

  const slug = searchParams.get('slug') || '';
  const pageId = searchParams.get('pageId');
  const secret = searchParams.get('secret');

  // Check if secret is valid
  if (secret !== env.NEXT_PUBLIC_STORYBLOK_TOKEN) {
    return new Response(JSON.stringify({ message: 'Invalid token' }), { status: 401 });
  }

  const host = request.headers.get('host') || 'http://localhost:3000';
  const url = new URL(request.url || '', `https://${host}`);

  url.pathname = slug;

  if (pageId) {
    url.search += `&_storyblok=${pageId}`;
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable();

  // Redirect to the path from Storyblok
  return NextResponse.redirect(url);
};
