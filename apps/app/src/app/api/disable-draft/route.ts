import { draftMode } from 'next/headers';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug') || '/';

  const host = request.headers.get('host') || 'http://localhost:3000';
  const url = new URL(request.url || '', `https://${host}`);

  url.pathname = slug;
  url.search = '';

  draftMode().disable();

  return NextResponse.redirect(url);
};
