import ShareContent from "@/components/share-page-content";
import { Profile } from "@/types/profiles";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  // Especifica que `data` debe ser del tipo `Profile`
  const { data, error } = await supabase
    .from("profiles") // Declara explícitamente el tipo `Profile`
    .select("*") // Asegúrate de seleccionar las columnas necesarias
    .eq("id", user.id)
    .single();

  // Redirige si `data` no contiene un perfil
  if (!data) {
    redirect("/create-profile");
  }

  return (
    <div className="w-full">
      <ShareContent data={data} />
    </div>
  );
}
