export default function TomatoMono({
  children,
}: {
  children: React.ReactNode;
}) {
  return <span className="text-tomato font-mono font-normal">{children}</span>;
}
