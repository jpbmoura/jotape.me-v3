import Footer from "@/components/footer";

/** Page chrome for the site itself. Examples under /examples render without it. */
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
