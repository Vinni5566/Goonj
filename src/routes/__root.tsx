import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { GlobalModals } from "../components/GlobalModals";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-plum">404</h1>
        <h2 className="mt-4 text-xl font-medium text-espresso">Page not found</h2>
        <p className="mt-2 text-sm text-warmgray">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-pill btn-plum">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-plum">This page didn't load</h1>
        <p className="mt-2 text-sm text-warmgray">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-pill btn-plum">
            Try again
          </button>
          <a href="/" className="btn-pill btn-ghost-plum">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Goonj — Bridge of Memories · Preserve family voices forever" },
      { name: "description", content: "Goonj saves the voice notes your grandmother sends on WhatsApp — her recipes, her stories, her love — so they're never lost to a phone upgrade." },
      { name: "author", content: "Goonj" },
      { property: "og:title", content: "Goonj — Bridge of Memories" },
      { property: "og:description", content: "AI-powered voice memory preservation, built on WhatsApp. For Indian families and NRIs." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Goonj" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@goonj" },
      { name: "theme-color", content: "#2D1B4E" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦋</text></svg>",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <GlobalModals />
    </QueryClientProvider>
  );
}
