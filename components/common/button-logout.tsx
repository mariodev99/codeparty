import { useFormStatus } from "react-dom";
import { Exit } from "../icons";
import { ReactNode } from "react";

export default function LogoutButton({
  children,
  pendingText,
  ...props
}: {
  children: ReactNode;
  pendingText: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="flex items-center gap-2 group text-content-secondary mt-4 cursor-pointer"
      {...props}
    >
      <Exit className={"group-hover:stroke-red-500"} />
      <div className="group-hover:text-red-500 font-normal text-base md:hidden lg:block">
        {pending ? pendingText : children}
      </div>
    </button>
  );
}
