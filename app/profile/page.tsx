import ProfileContent from "@/features/profiles/components/profile-content";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { redirect } from "next/navigation";

interface Profile {
  avatar: string;
  position: string;
  username: string;
  description: string;
  stack: { name: string; color: string }[]; // Ajustado el tipo de stack
}

export default async function Page() {
  const supabase = await createClient();

  // Verificación de usuario autenticado
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Fetch del perfil de usuario
  const { data: profileData, error } = await supabase
    .from("profiles")
    .select("avatar, position, username, description, stack") // Especificamos las columnas
    .eq("id", user.id)
    .limit(1)
    .single<Profile>();

  // Manejando error de perfil no encontrado
  if (error || !profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full py-10">
      <div className="w-full flex flex-col items-center">
        <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-content-primary relative overflow-hidden border-[3px] border-border">
          {profileData.avatar && (
            <Image
              alt="avatar"
              src={profileData.avatar}
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <div className="text-center px-5">
          <div className="text-xl md:text-2xl font-medium mt-3">
            {profileData.username}
          </div>
          <div className="text-sm md:text-base font-regular text-content-secondary leading-6">
            {profileData.position}
          </div>
          <div className="flex gap-1 mt-2 flex-wrap">
            {profileData.stack.map((tech) => (
              <div
                key={tech.name}
                className="rounded-full px-3 py-1 cursor-pointer"
                style={{
                  backgroundColor: `${tech.color}1A`,
                  color: tech.color,
                }}
              >
                {tech.name}
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
