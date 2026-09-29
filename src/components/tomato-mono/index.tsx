export default function TomatoMono({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-tomato/10 px-1 py-0.5 font-mono text-[0.875em] font-normal text-tomato">
      {children}
    </code>
  );
}
