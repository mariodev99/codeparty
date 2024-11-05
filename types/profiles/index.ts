export interface Profile {
    username:string
    position: string
    avatar: string
    links: {github: string, website: string}
    description: string
    id: string
    stack: {name: string, color:String}[]
}