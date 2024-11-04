import ProfileContent from "@/features/profiles/components/profile-content";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = await createClient();

  let profileData;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", user.id)
      .limit(1)
      .single();

    if (data) {
      profileData = data;
    }
  }

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className=" w-full py-10">
      <div className="w-full  flex flex-col items-center">
        <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-content-primary relative overflow-hidden border-[3px] border-border -z-10">
          {profileData.avatar && (
            <Image alt="avatar" src={profileData?.avatar} fill />
          )}
        </div>
        <div className="text-center px-5">
          <div className="text-xl md:text-2xl font-medium mt-3">
            {profileData?.username}
          </div>
          <div className=" text-sm md:text-base font-regular text-content-secondary leading-6">
            {profileData?.position}
          </div>
          <div className="flex gap-1 mt-2 flex-wrap">
            {profileData.stack.map((tecnologie) => (
              <div
                key={tecnologie.name}
                className="rounded-full px-3 py-1 cursor-pointer"
                style={{
                  backgroundColor: `${tecnologie.color}1A`,
                  color: tecnologie.color,
                }}
              >
                {tecnologie.name}
              </div>
            ))}
          </div>
          <p className="mt-2 text-sm md:text-base">
            {profileData?.description}
          </p>
        </div>
      </div>

      <ProfileContent />
    </div>
  );
}
