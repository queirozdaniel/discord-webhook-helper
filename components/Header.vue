<template>
  <nav class="mt-10 flex justify-center">
    <ul class="menu bg-base-200 sm:menu-horizontal w-full mx-4 sm:w-auto text-center rounded-box">
      <li class="m-1" v-for="item of options" :key="item.path">
        <NuxtLink :to="item.path">
          <Icon :name="item.icon" color="black" />
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const options = ref([
  {
    path: "/",
    icon: "twemoji:house",
    label: "Home",
  },
  {
    path: "message",
    icon: "twemoji:skull-and-crossbones",
    label: "Enviar mensagem",
  },
  {
    path: "actors",
    icon: "twemoji:goblin",
    label: "Meus personagens",
  },
  {
    path: "configurations",
    icon: "twemoji:hammer-and-wrench",
    label: "Configuração",
  }
]);
</script>


