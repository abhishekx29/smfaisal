import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import smfaisalLogo from "../assets/smfaisal.png";
import { ThemeProvider } from "@/components/site/theme-provider";
import { Preloader } from "@/components/site/preloader";
import { Toaster } from "@/components/ui/sonner";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
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
      { title: "Dr. Syed Mohammad Faisal | Professor, Researcher & Computer Scientist" },
      { name: "description", content: "Official website of Dr. Syed Mohammad Faisal featuring research publications, academic profile, patents, books, conferences, teaching, and contact information." },
      { name: "author", content: "Dr. Syed Mohammad Faisal" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "keywords", content: "Dr. Syed Mohammad Faisal, professor, researcher, computer scientist, finance, Jazan University, research publications, ESG, FinTech, corporate governance" },
      { property: "og:title", content: "Dr. Syed Mohammad Faisal | Professor, Researcher & Computer Scientist" },
      { property: "og:description", content: "Official website of Dr. Syed Mohammad Faisal featuring research publications, academic profile, patents, books, conferences, teaching, and contact information." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dr. Syed Mohammad Faisal" },
      { property: "og:image", content: "https://lh3.googleusercontent.com/sitesv/AG8ngQVPlIuuYDvf0GPZiOcQvbb7C5NpM5HMVWonpXT4NgfuSdTyQv0m6z4T0sa-kk4pwyiOUeTnvGSNBaGtvC7V2dHamK4o17IXfLg1qbvcvLpobi2tzDdl2OkfC8h-jZn-i8puq7Hxcg6vX1xdnf48u7Z221zCY3eRs1PPrAamKDROJFHdtiE1-2HK2SU5MVit8NuvcYPAcrvs0xjiYAg8qBUtnhPBPxCANCE4Ib3qd04=w1280" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dr. Syed Mohammad Faisal | Professor, Researcher & Computer Scientist" },
      { name: "twitter:description", content: "Official website of Dr. Syed Mohammad Faisal featuring research publications, academic profile, patents, books, conferences, teaching, and contact information." },
      { name: "twitter:image", content: "https://lh3.googleusercontent.com/sitesv/AG8ngQVPlIuuYDvf0GPZiOcQvbb7C5NpM5HMVWonpXT4NgfuSdTyQv0m6z4T0sa-kk4pwyiOUeTnvGSNBaGtvC7V2dHamK4o17IXfLg1qbvcvLpobi2tzDdl2OkfC8h-jZn-i8puq7Hxcg6vX1xdnf48u7Z221zCY3eRs1PPrAamKDROJFHdtiE1-2HK2SU5MVit8NuvcYPAcrvs0xjiYAg8qBUtnhPBPxCANCE4Ib3qd04=w1280" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: smfaisalLogo, type: "image/png" },
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
      <ThemeProvider>
        <Preloader />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <Toaster position="top-center" richColors />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

