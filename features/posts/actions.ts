"use server"

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { UserPostData } from "./types/Post";

export async function createPost(user: UserPostData, image: string, content:string) {
    const supabase = await createClient();

    const {
      data
    } = await supabase.auth.getUser();

    // get profile
  
    const {username, position, avatar} = user
    // const content = formData.get("content")

    const rawFormData = {
        user_id: data.user?.id,
        user: {
            username,
            position,
            avatar,
        },
        content,
        image,
        created_at: new Date(),
        likes: [],
        saves: [],
    }

    const { error } = await supabase
        .from('posts')
        .insert(rawFormData)

    if (error) {
        console.log(error);
        
        redirect("/error")
    }
    redirect("/home")
    
  }