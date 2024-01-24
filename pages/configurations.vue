<template>
  <div class="my-10">
    <h1 class="text-2xl">Configure a URL do Webhook</h1>
    <div class="my-10 flex gap-4">
      <input
        v-model="url"
        type="text"
        placeholder="Digite a url aqui"
        class="input input-bordered input-primary w-full max-w-screen-lg"
      />
      <button
        class="btn btn-primary"
        :disabled="!canUpdate"
        @click="updateWebhookURL(url)"
      >
        Salvar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { updateWebhookURL } = useDiscordStore();
const store = useDiscordStore();

const url = ref(store.webhookUrl);
const canUpdate = ref(store.canUse);

watch(url, (newValue, oldValue) => {
  const linkMatch = newValue.match(/(https?:\/\/[^\s]+)/g);
  if (linkMatch?.[0]) {
    canUpdate.value = linkMatch?.[0].length > 15;
  } else {
    canUpdate.value = false;
  }
});
</script>