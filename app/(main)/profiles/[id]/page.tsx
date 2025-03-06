import ProfileContent from "@/modules/profile/components/profile-content";
import { Profile } from "@/modules/profile/types";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single<Profile>();

  if (error) {
    return (
      <div className="text-xl text-center w-full text-content-secondary">
        Error: {error.message}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-xl text-center w-full text-content-secondary">
        Profile not found
      </div>
    );
  }

  return (
    <div className="w-full py-10">
      <div className="w-full flex flex-col items-center">
        <div className=" relative  p-1">
          <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-content-primary relative border-[3px] border-border overflow-hidden">
            {data.avatar && (
              <Image
                alt="avatar"
                src={data.avatar}
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
        <div className="text-center px-5">
          <div className="text-xl md:text-2xl font-medium mt-3">
            {data.username}
          </div>
          <div className="text-base font-regular text-content-secondary leading-6">
            {data.position}
          </div>
          <div className="flex gap-1 mt-2 flex-wrap justify-center">
            {data.stack.map(({ name, color }) => (
              <div
                key={name}
                className="rounded-full px-3 py-1 cursor-default"
                style={{
                  backgroundColor: `${color}1A`,
                  color: color,
                }}
              >
                {name}
              </div>
            ))}
          </div>
          <p className="mt-2 text-sm md:text-base">{data.description}</p>
        </div>
      </div>

      <ProfileContent userId={id} />
    </div>
  );
}
