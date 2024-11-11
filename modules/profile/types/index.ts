export interface Profile {
    username:string
    position: string
    avatar: string
    github: string
    website: string
    description: string
    id: string
    stack: {name: string, color: string}[]
}

export interface Skill {
    color: string;
    name: string;
  }