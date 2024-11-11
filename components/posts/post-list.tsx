import { ReactNode } from "react";

export default function PostList({ children }: { children: ReactNode }) {
  return <div className="py-5 flex flex-col gap-4 w-full">{children}</div>;
}
