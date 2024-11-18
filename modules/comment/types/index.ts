import { UserPostData } from "@/modules/post/types"

export interface Comment {
    comment_id: string
    post_id: string
    user_id: string
    created_at: Date
    content: string
    user: UserPostData
}