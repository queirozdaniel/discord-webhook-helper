<template>
  <div class="px-4">
    <div class="label">
      <span class="label-text">Personagens:</span>
    </div>
    <ul
      class="flex flex-row flex-wrap gap-3 menu p-2 shadow bg-base-300 rounded-md"
    >
      <li
        class="min-w-20"
        v-for="actor of store.getActors"
        :key="actor.id"
        @click="store.selectAnActor(actor.id)"
        :class="actor.id === store.selectedId ? 'bg-base-100 rounded-md' : ''"
      >
        <div>
          <span
            class="avatar"
            :class="actor.id === store.selectedId ? 'online' : ''"
          >
            <div
              v-if="configStore.isAnonymous"
              class="skeleton w-12 rounded-full shrink-0"
            ></div>
            <div v-else class="w-12 rounded-full">
              <img :src="actor.avatarUrl" />
            </div>
          </span>
          {{ configStore.isAnonymous ? safeName(actor.name) : actor.name }}
        </div>
      </li>
    </ul>
  </div>
</template>


<script setup lang="ts">
const configStore = useConfigurationStore();
const store = useDiscordStore();

const safeName = (name: string): string => {
  return name
    .split(" ")
    .map((value) => {
      let size = value.length;
      return value.charAt(0) + "#".repeat(size);
    })
    .join(" ");
};
</script>