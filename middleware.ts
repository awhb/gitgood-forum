import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('Authorization')?.value;
  const { pathname } = request.nextUrl;

  if (!authToken && !pathname.startsWith('/auth/')) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  if (authToken && (pathname.startsWith('/auth/'))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
