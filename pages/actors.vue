<template>
  <div class="my-10">
    <h1 class="text-2xl">Crie seus personagens</h1>
    <div class="mt-10 flex gap-4">
      <input
        v-model="actor.name"
        type="text"
        placeholder="Informe um nome"
        class="input input-bordered input-primary w-full max-w-screen-lg"
      />
      <input
        v-model="actor.avatarUrl"
        type="url"
        placeholder="Cole a url da imagem"
        class="input input-bordered input-primary w-full max-w-screen-lg"
      />
      <button
        class="btn btn-primary"
        :disabled="!canUpdate"
        @click="addActor()"
      >
        Salvar
      </button>
    </div>
    <div class="mt-10">
      <p class="text-xl mb-4">
        {{ actors.length == 0 ? "Previa:" : "Seus personagens:" }}
      </p>
      <div class="flex flex-row flex-wrap gap-3">
        <actor-preview
          :key="actor.name"
          :name="actor.name"
          :image="actor.avatarUrl"
          :id="actor.id"
        ></actor-preview>

        <actor-preview
          v-for="actor of actors"
          :key="actor.name"
          :name="actor.name"
          :image="actor.avatarUrl"
          :id="actor.id"
        ></actor-preview>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["configs"],
});

import type { Actor } from "~/types";

const { actors, createActor } = useDiscordStore();

const actor = reactive<Actor>({
  id: "",
  avatarUrl: "",
  name: "",
});

const addActor = async () => {
  createActor(actor);
  actor.id = "";
  actor.name = "";
  actor.avatarUrl = "";
};

const canUpdate = ref(false);
const validUrl = ref(false);

watch(actor, (newValue) => {
  const url = actor.avatarUrl.match(/(https?:\/\/[^\s]+)/g);
  if (url?.[0]) {
    validUrl.value = url?.[0].length > 15;
  } else {
    validUrl.value = false;
  }

  canUpdate.value = actor.name.length > 3 && validUrl.value;
});

// watch(validUrl, (value) => {
//   if (value) {
//     previews.value = [actor, ...actors];
//   } else {
//     previews.value = [...actors];
//   }
// });
</script>