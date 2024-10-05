// middleware/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Mendapatkan status login dari cookie
  const isLoggedIn = request.cookies.get('isLoggedIn')?.value;

  // Daftar halaman yang tidak membutuhkan login
  const publicPaths = ['/landingpage', '/api/hello'];

  // Jika user belum login dan mencoba mengakses halaman selain publicPaths, redirect ke landingpage
  if (!isLoggedIn && !publicPaths.includes(request.nextUrl.pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/landingpage'; // Redirect ke halaman landingpage
    return NextResponse.redirect(url);
  }

  // Jika user sudah login, lanjutkan ke halaman yang diminta
  return NextResponse.next();
}

// Daftar URL di mana middleware ini akan diterapkan
export const config = {
  matcher: ['/', '/homepage/:path*', '/chatbot/:path*'],
};
