import type { DiscordMessage } from '~/types';
import { useDiscordStore } from './../stores/useDiscord';

export default async (delay: boolean = false) => {
    const store = useDiscordStore()
    const messageStore = useMessagesStore()

    messageStore.getMessagesToSend.sort((itemA, itemB) => {
        return itemA.position < itemB.position ? 0 : 1 
    }).map(item => item.message).forEach(async (message) => {
        const body: DiscordMessage = {
            content: message.content,
            embeds: null,
            username: message.username,
            avatar_url: message.avatar_url,
            attachments: []
        }
        if(delay) {
            setTimeout(() => {
                const todo = $fetch(store.webhook, {
                    method: 'POST',
                    body
                })
           }, 1000 * 120)
    
           return "In schedule..."
       } else {
           const todo = await $fetch(store.webhook, {
               method: 'POST',
               body
           })
           return todo
       }
    })

    messageStore.cleanMessage()
    
};