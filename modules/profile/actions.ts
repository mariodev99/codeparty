'use server'

import { Skill } from "@/modules/profile/types";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProfile(description:string, stack:Skill[], avatar: string, formData: FormData) {
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
        website,
        github,
    }

    const { error } = await supabase
        .from('profiles')
        .insert(rawFormData)

    if (error) {
        redirect("/error")
    }
    redirect("/home")
    
  }

  export async function updateProfile(currentStack:Skill[], avatar: string, formData: FormData) {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
  
    const username = formData.get("username")?.toString();
    const position = formData.get("position")?.toString();
    const github = formData.get("github")?.toString();
    const website = formData.get("website")?.toString();
    const description = formData.get("description")?.toString();

    const rawFormData = {
        username,
        position,
        description,
        stack: currentStack,
        avatar,
        website,
        github,
    }


    if (user) {
      
      const {  error } = await supabase
      .from('profiles')
      .update(rawFormData)
      .eq('id', user.id)

      if (error) {
        redirect("/error")
      }
      redirect("/profile")
    }
    
  }