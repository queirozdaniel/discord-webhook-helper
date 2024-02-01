export type Message = {
    content: string
    username: string,
    avatar_url: string,
}

export type DiscordMessage = {
    embeds: string | null
    attachments: []
} & Message

export type Actor = {
    id: string,
    avatarUrl: string,
    name: string
}

export type StorageType = "localStorage" | "sessionStorage"