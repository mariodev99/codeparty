import { ReactNode } from "react";

export default function PostList({ children }: { children: ReactNode }) {
  return <div className="p-5 flex flex-col gap-4">{children}</div>;
}
