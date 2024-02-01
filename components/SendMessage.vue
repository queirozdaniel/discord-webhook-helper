<template>
    <div class="flex gap-4">
        <span class="avatar">
            <div v-if="configStore.isAnonymous" class="skeleton w-12 rounded-full shrink-0"></div>
            <div v-else class="w-12 rounded-full">
                <img :src="avatar_url" />
            </div>
        </span>
        <div>
            <p class="font-bold">{{ configStore.isAnonymous ? safeName(name) : name }} 
                <span class="bot-bg badge badge-primary">BOT</span> 
                <span class="text-xs font-light date"> Today at {{ time() }} AM</span>
            </p>
            <p class="text-sm">{{ content }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
const configStore = useConfigurationStore()
defineProps({
    avatar_url: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        default: ""
    },
    content: {
        type: String,
        default: ""
    }
})

const time = () => {
    return new Date().getHours() +":" +new Date().getMinutes()
}

const safeName = (name: string) => {
  return name
    .split(" ")
    .map((value) => {
      let size = value.length;
      return value.charAt(0) + "#".repeat(size - 1);
    })
    .join(" ");
};
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