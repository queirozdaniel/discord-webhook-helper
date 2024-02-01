<template>
    <ul class="flex flex-col flex-wrap gap-3">
      <li class="min-w-20" v-for="(message, index) of messageStore.getMessages" :key="index + message.username">
        <send-message :avatar_url="message.avatar_url" :name="message.username" :content="message.content"></send-message>
      </li>
    </ul>
</template>

<script lang="ts" setup>
const messageStore = useMessagesStore()
</script>

<style scoped>
.bot-bg {
    position: relative;
    top: -0.1rem;
    min-height: 1.275em;
    max-height: 1.275em;
    padding: 0.071875rem 0.275rem;
    border-radius: 3px;
    background: rgb(88, 101, 242);
    color: rgb(255, 255, 255);
    font-size: 0.625em;
    font-weight: 500;
    line-height: 1.3;
    vertical-align: baseline;
    text-transform: uppercase;
}

</style>