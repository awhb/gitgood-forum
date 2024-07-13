import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getUser } from './app/actions';

export async function middleware(request: NextRequest) {
  const user = await getUser();
  const { pathname } = request.nextUrl;

  if (!user && !pathname.startsWith('/auth/')) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  if (user && (pathname.startsWith('/auth/'))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
