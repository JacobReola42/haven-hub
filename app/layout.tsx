import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
// only here from clerk
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeAway",
  description: "Feel at home, away from home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar />
              <main className='container py-10'>
              {children}
              </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}

// suppress hydration warning got rid of error on Zod build

// Warning: Extra attributes from the server: class,style
// html
// SWRConfig
// OrganizationProvider
// ClerkContextProvider
// ClerkProviderBase
// ClerkProvider
// ClerkNextOptionsProvider
// ClientClerkProvider
// ClerkProvider (Server)
// RootLayout (Server)
// Component@
// RedirectBoundary
// Component@
// NotFoundBoundary
// DevRootNotFoundBoundary
// PureComponent@
// HotReload
// Router
// Component@
// ErrorBoundary
// AppRouter
// ServerRoot
// Root