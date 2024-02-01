<template>
  <div class="my-8">
    <h1 class="text-2xl mb-8">Envie sua mensagem:</h1>
    <div class="content gap-2 ">
      <div class="grid col-start-1 flex-grow mim-w-360px py-2 discord-bg card bg-base-300 rounded-box">
        <label class="form-control px-4">
          <div class="label">
            <span class="label-text">Mensagem:</span>
          </div>
          <textarea
            class="textarea textarea-bordered h-24"
            placeholder="Escreva aqui"
            v-model="message"
          ></textarea>
          <div class="join mt-4">
            <button class="btn btn-primary w-1/3 join-item" :disabled="!canSendMessage"  @click="addMessageToQueue()">Adicionar</button>
            <button class="btn btn-accent w-1/3 join-item" :disabled="!canSendMessage && messageStore.getMessages.length == 0 "  @click="sendMessages()">Enviar Agora</button>
            <button class="btn btn-secondary w-1/3 join-item" :disabled="!canSendMessage && messageStore.getMessages.length == 0 " @click="sendMessages(true)">Enviar +2 min</button>
          </div>
        </label>
        <select-actor></select-actor>
      </div>
      <div class="grid col-start-2 flex-grow-0 max-w-360px discord-bg card bg-base-300 rounded-box">
        <div class="p-4 flex flex-col gap-2 ">
          <send-list></send-list>
          <send-message
            :avatar_url="store.selectedActor?.avatarUrl" 
            :name="store.selectedActor?.name" 
            :content="messageBreak">
          </send-message>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  middleware: ["configs"],
});

const store = useDiscordStore();
const messageStore = useMessagesStore()

const message = ref("");

const BREAK_LINE = 41

const messageBreak = computed(() => {
  if(message.value.length > BREAK_LINE * 2) {
    message.value = message.value.substring(0, BREAK_LINE * 2)
  }
  const lineBreack =  message.value.substring(0, BREAK_LINE) + `\n` + message.value.substring(BREAK_LINE)
  return message.value.length > BREAK_LINE ? lineBreack : message.value
})

const canSendMessage = computed(() => {
  return (
    message.value.length >= 1 &&
    store.selectedActor &&
    store.selectedActor?.id !== ""
  );
});

const cleanForm = () => {
  message.value = "";
  store.selectAnActor("");
}

const addMessageToQueue = () => {
  messageStore.addMessage({
    avatar_url: store.selectedActor?.avatarUrl!,
    username: store.selectedActor?.name!,
    content: messageBreak.value
  })
  cleanForm()
}

const sendMessages = (delay: boolean = false) => {
  if(messageStore.getMessages.length == 0 || canSendMessage) {
    addMessageToQueue()
  }
  useDiscordWebhook(delay);
  cleanForm()
};

watch(message, (newValue) => {
  if (
    newValue.length >= 1 &&
    store.selectedActor &&
    store.selectedActor?.id !== ""
  ) {
    canSendMessage.value = true;
  } else {
    canSendMessage.value = false;
  }
});
</script>

<style scoped>

.discord-bg {
  background: rgb(49, 51, 56);
}

</style>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 3fr 2fr ;
}

</style>