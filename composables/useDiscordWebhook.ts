import type { DiscordMessage } from '~/types';
import { useDiscordStore } from './../stores/useDiscord';

export default async (message: string, delay: boolean = false) => {
    const store = useDiscordStore()

    const body: DiscordMessage = {
        content: message,
        embeds: null,
        username: store.selectedActor?.name!!,
        avatar_url: store.selectedActor?.avatarUrl!!,
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
    
};