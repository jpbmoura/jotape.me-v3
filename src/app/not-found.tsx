import Link from "next/link";
import "./globals.css";

// Requests outside any locale (rare, the proxy redirects almost everything).
export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="grid min-h-dvh place-items-center p-8 text-center">
        <div className="space-y-4">
          <p className="font-mono text-xs text-subtle">404</p>
          <h1 className="text-2xl font-semibold text-fg">Nothing to see here</h1>
          <Link href="/en" className="text-sm text-fg underline underline-offset-4">
            Back home
          </Link>
        </div>
      </body>
    </html>
  );
}
