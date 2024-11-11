import ProfileContent from "@/modules/profile/components/profile-content";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Profile } from "@/modules/profile/types";
import ButtonEditProfile from "@/modules/profile/components/button-edit-profile";

export default async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { data: profileData, error } = await supabase
    .from("profiles")
    .select(
      "avatar, position, username, description, stack, github, website, id"
    )
    .eq("id", user.id)
    .limit(1)
    .single<Profile>();

  if (!profileData) {
    return redirect("/create-profile");
  }

  return (
    <div className="w-full py-10">
      <div className="w-full flex flex-col items-center">
        <div className=" relative  p-1">
          <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-content-primary relative border-[3px] border-border overflow-hidden">
            {profileData.avatar && (
              <Image
                alt="avatar"
                src={profileData.avatar}
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>

          <div className="absolute top-0 right-0 z-20">
            <ButtonEditProfile existingData={profileData} />
          </div>
        </div>
        <div className="text-center px-5">
          <div className="text-xl md:text-2xl font-medium mt-3">
            {profileData.username}
          </div>
          <div className="text-base font-regular text-content-secondary leading-6">
            {profileData.position}
          </div>
          <div className="flex gap-1 mt-2 flex-wrap justify-center">
            {profileData.stack.map(({ name, color }) => (
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
          <p className="mt-2 text-sm md:text-base">{profileData.description}</p>
        </div>
      </div>

      <ProfileContent />
    </div>
  );
}
