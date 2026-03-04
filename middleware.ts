import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Middleware simplificado para evitar qualquer erro de execução.
// Se quiser, depois voltamos a adicionar a lógica de parâmetros/cookies.
export function middleware(_req: NextRequest) {
  try {
    return NextResponse.next();
  } catch (error) {
    console.error('[middleware]', error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};