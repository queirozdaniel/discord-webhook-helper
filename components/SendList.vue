<template>
    <ul class="flex flex-col flex-wrap gap-3">
      <li class="min-w-20" v-for="(message, index) of messageStore.getMessages" :key="index + message.username">
        <send-message 
         :avatar_url="message.avatar_url" 
         :name="message.username" 
         :content="message.content">
        </send-message>
      </li>
    </ul>
</template>

<script lang="ts" setup>
const messageStore = useMessagesStore()
</script>

