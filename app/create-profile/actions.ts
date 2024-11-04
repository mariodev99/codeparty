'use server'

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function createProfile(description:string, stack:any, avatar: string, formData: FormData) {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
  

    const username = formData.get("username")?.toString();
    const position = formData.get("position")?.toString();
    const github = formData.get("github")?.toString();
    const website = formData.get("website")?.toString();

    const rawFormData = {
        id: user?.id,
        username,
        position,
        description,
        stack,
        avatar,
        links: {
            github,
            website,
        }
    }

    const { error } = await supabase
        .from('profiles')
        .insert(rawFormData)

    if (error) {
        redirect("/error")
    }
    redirect("/home")
    
  }