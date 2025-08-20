import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth-token')?.value;

  // If the user is trying to access the login page, let them through.
  if (request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.next();
  }

  // If there's no auth token and they're not on the login page, redirect them.
  if (!authToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If they have an auth token, let them proceed.
  return NextResponse.next();
}

export const config = {
  // Match all request paths except for the ones starting with:
  // - api (API routes)
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
