import { NextRequest, NextResponse } from 'next/server';
import { EnumTokens } from '@/services/auth/auth-token.service';
import { PRIVATE_URL, PUBLIC_URL } from '@/config/url.config';

export async function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

  const isAuthPage =
    request.url.includes(PUBLIC_URL.register()) || request.url.includes(PUBLIC_URL.login());

  if (isAuthPage) {
    if (refreshToken) {
      return NextResponse.redirect(new URL(PRIVATE_URL.home(), request.url));
    }

    return NextResponse.next();
  }

  if (refreshToken === undefined) {
    return NextResponse.redirect(new URL(PUBLIC_URL.login(), request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/login', '/auth/register'],
};
