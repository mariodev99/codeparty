'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function SendComment(userProfile:any, postId:any, formData: FormData) {
const supabase = await createClient()    
const content = formData.get("content")

    const rawFormData = {
        user: userProfile,
        content,
        post_id: postId,
        created_at: new Date(),
    }
    
    const { error } = await supabase
        .from('comments')
        .insert(rawFormData)

    if (error) {
        redirect("/error")
    }else{
        revalidatePath("/")
    }

}