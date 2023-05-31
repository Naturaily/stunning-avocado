import type { NextMiddleware } from 'next/server';

import { previewMiddleware } from '@natu/storyblok-utils';

export const middleware: NextMiddleware = async request => previewMiddleware(request);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - api (API routes)
     * - static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next|api|static|favicon.ico).*)',
  ],
};
