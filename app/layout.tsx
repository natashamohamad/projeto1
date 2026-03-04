import HeaderScript from "@/components/header-script";
import AccessDenied from "@/components/access-denied-whitepage";
import { getUserLayer } from "@/utils/get-user-layer";
import { LayerProvider } from "@/context/layer-provider";
import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import { headers, cookies } from "next/headers";
import "@/app/globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Discover the Faceless Channels",
  description: "Discover the Faceless Channels...",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // ENVIRONMENT VERIFY
  const isProduction = process.env.NODE_ENV === 'production';

  // GET DOMAIN ID
  const cks = await cookies();
  const hdrs = await headers();
  const host = hdrs.get('x-host') || '';
  const url = hdrs.get('x-url') || '';
  const catParam = cks.get('xcat_valid');
  const content = catParam?.value || 'new';
  const params = hdrs.get('x-params') || '';
  
  // GET USER LAYER
  const userLayer = await getUserLayer({ cks, hdrs });

  // ROTAS QUE NÃO MOSTRAM ACCESS DENIED (layer 1 vê o conteúdo da página)
  const allowedPaths = ['/ready', '/almost', '/promo', '/thanks'];
  const pathname = url ? new URL(url).pathname : '/';
  const isAllowedRoute = allowedPaths.some((p) => pathname.startsWith(p));

  // BODY CLASS
  const bodyClassName = `flex flex-col min-w-[350px] min-h-svh max-h-svh items-center select-none ${redHatDisplay.variable} antialiased`;
    
  return (
    <html lang="es">
      {isProduction && (
        <head>
          <HeaderScript content={content} />
        </head>
      )}
      <body className={bodyClassName} suppressHydrationWarning>
        {userLayer === 1 && !isAllowedRoute ? (
          <AccessDenied />
        ):(
          <LayerProvider
            host={host}
            layer={userLayer}
            params={params}
            content={content}
          >
            {children}
          </LayerProvider>
        )}
      </body>
    </html>
  );
  
};