// The real layout lives in [locale]/layout.tsx; this one only exists so the
// root not-found page has somewhere to render.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
