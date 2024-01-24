<template>
  <div class="my-8">
    <h1 class="text-2xl">Crie seus personagens aqui</h1>

    <div class="flex gap-3 flex-col sm:flex-row mt-8 mb-4">
      <div class="flex flex-1 gap-4 flex-col justify-between">
        <input
          v-model="actor.name"
          type="text"
          placeholder="Informe um nome"
          class="input input-bordered input-primary"
        />
        <input
          v-model="actor.avatarUrl"
          type="url"
          placeholder="Cole a url da imagem"
          class="input input-bordered input-primary"
        />
      </div>
      <div class="flex-2">
        <actor-preview :key="actor.name"
          :name="actor.name"
          :image="actor.avatarUrl"
          :id="actor.id"
        ></actor-preview>
      </div>
    </div>
    <button class="btn btn-primary w-full"
      :disabled="!canUpdate"
      @click="addActor()"
      >
      Adicionar Personagem
    </button>

    <p class="text-2xl my-8">
      Seus Personagens:
    </p>
    <actors-list class="pb-8" ></actors-list>
  </div>
</template>

<script setup lang="ts">
import type { Actor } from "~/types";

definePageMeta({
  middleware: ["configs"],
});

// data | store
const { actors, createActor } = useDiscordStore();

const actor = reactive<Actor>({
  id: "",
  avatarUrl: "",
  name: "",
});

const canUpdate = ref(false);
const validUrl = ref(false);

// methods
const addActor = async () => {
  createActor(actor);
  actor.id = "";
  actor.name = "";
  actor.avatarUrl = "";
};


// whatches
watch(actor, (newValue) => {
  const url = actor.avatarUrl.match(/(https?:\/\/[^\s]+)/g);
  if (url?.[0]) {
    validUrl.value = url?.[0].length > 15;
  } else {
    validUrl.value = false;
  }

  canUpdate.value = actor.name.length > 3 && validUrl.value;
});

</script>