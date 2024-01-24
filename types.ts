export type DiscordMessage = {
    content: string
    embeds: string | null
    username: string,
    avatar_url: string,
    attachments: []
}

export type Actor = {
    id: string,
    avatarUrl: string,
    name: string
}

export type StorageType = "localStorage" | "sessionStorage"