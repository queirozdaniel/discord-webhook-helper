<template>
  <div class="hero min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">{{ appConfig.project.name }}</h1>
        <p class="py-6">
          {{ appConfig.project.description }}
        </p>
        <NuxtLink :to="nextStep" class="btn btn-primary">COMEÇAR</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "clean",
});

const appConfig = useAppConfig();

const { canUse } = useDiscordStore();

const nextStep = canUse ? "message" : "configurations";
</script>