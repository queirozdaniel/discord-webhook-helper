<template>
  <div class="my-8">
    <h1 class="text-2xl mb-8">Envie sua mensagem:</h1>
    <div class="flex w-full min-h-full">
      <div class="grid flex-grow mim-w-360px py-2 discord-bg card bg-base-300 rounded-box">
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
            <button class="btn btn-primary w-1/3 join-item">Adicionar</button>
            <button class="btn btn-accent w-1/3 join-item" :disabled="!canSendMessage"  @click="sendMessage()">Enviar Agora</button>
            <button class="btn btn-secondary w-1/3 join-item" :disabled="!canSendMessage" @click="sendMessage(true)">Enviar +2 min</button>
          </div>
        </label>
        <select-actor></select-actor>
      </div>
      <div class="divider divider-horizontal">#</div>
      <div class="grid flex-grow-0 max-w-360px discord-bg card bg-base-300 rounded-box place-items-center">
        <div class="p-4 flex flex-col gap-2 ">
          <actor-preview
            :id="store.selectedActor?.id"
            :name="store.selectedActor?.name"
            :image="store.selectedActor?.avatarUrl"
            :message="message"
            :readOnly="true"
          />
          <send-list></send-list>
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
const message = ref("");

const canSendMessage = computed(() => {
  return (
    message.value.length >= 1 &&
    store.selectedActor &&
    store.selectedActor?.id !== ""
  );
});

const sendMessage = (delay: boolean = false) => {
  useDiscordWebhook(message.value, delay);
  message.value = "";
  store.selectAnActor("");
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