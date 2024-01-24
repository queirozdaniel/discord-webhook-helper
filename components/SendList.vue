<template>
    <ul class="flex flex-col flex-wrap gap-3">
      <li class="min-w-20" v-for="actor of store.getActors" :key="actor.id">
        <div class="flex gap-4">
          <span class="avatar">
            <div v-if="configStore.isAnonymous" class="skeleton w-12 rounded-full shrink-0"></div>
            <div v-else class="w-12 rounded-full">
              <img :src="actor.avatarUrl" />
            </div>
          </span>
          <div>
            <p class="font-bold">{{ configStore.isAnonymous ? "safeName(actor.name)" : actor.name }} 
                <span class="bot-bg badge badge-primary">BOT</span> 
                <span class="text-xs font-light date"> Today at {{ time() }} AM</span>
            </p>
            <p class="text-sm">djansdajnsdk</p>
          </div>
        </div>
      </li>
    </ul>
</template>

<script lang="ts" setup>

const store = useDiscordStore()
const configStore = useConfigurationStore()

const time = () => {
    return new Date().getHours() +":" +new Date().getMinutes()
}

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