import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center h-screen">
      <LoaderCircle className="animate-spin size-8" />
    </div>
  );
}
