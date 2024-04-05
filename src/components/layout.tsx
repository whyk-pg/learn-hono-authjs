import type { Child } from "hono/jsx";

interface LayoutProps {
  children: Child;
}

export const Layout = ({ children }: LayoutProps) => {
  const SITE_TITLE = "Verify Discord social login";

  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
        />
        <title>{SITE_TITLE}</title>
      </head>
      <body>
        <header>
          <h1>{SITE_TITLE}</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};
