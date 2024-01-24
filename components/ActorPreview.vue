<template>
  <div
    class="rounded-lg border border-primary-100 p-3 bg-base-300 flex justify-between min-w-96 sm:max-w-96 flex-row"
  >
    <div class="avatar">
      <div
        v-if="!image || configStore.isAnonymous"
        class="skeleton w-24 rounded-full shrink-0"
      ></div>
      <div v-else class="w-24 rounded-full">
        <img :src="image" />
      </div>
    </div>
    <div
      class="flex flex-col overflow-hidden whitespace-nowrap text-ellipsis justify-center gap-4"
    >
      <p class="text-3xl font-semibold">
        {{ (configStore.isAnonymous ? safeName : name) || "Nome" }}
      </p>
      <p>{{ message }}</p>
    </div>
    <span
      v-if="id === '' && !readOnly"
      class="indicator-item badge badge-primary items-end"
    >
      Preview
    </span>
    <span v-if="readOnly"></span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
    default: "",
  },
  image: {
    type: String,
    required: true,
    default: "",
  },
  readOnly: {
    type: Boolean,
  },
  message: {
    type: String,
    default: "Seu mensagem aqui.....",
  },
});

const configStore = useConfigurationStore();
const { removeActor } = useDiscordStore();

const remove = () => {
  removeActor({
    id: props.id,
    name: props.name,
    avatarUrl: props.image,
  });
};

const safeName = computed(() => {
  return props.name
    .split(" ")
    .map((value) => {
      let size = value.length;
      return value.charAt(0) + "#".repeat(size);
    })
    .join(" ");
});
</script>