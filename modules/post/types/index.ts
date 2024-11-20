export interface UserPostData {
    avatar: string
    username: string
    position: string
    id?: string
}

export interface Post {
    id: string
    user_id: string
    user: UserPostData
    created_at: Date
    content: string
    image?: string
    saves: string[]
    likes: string[]
}
