<template>
    <div class="overflow-x-auto">
        <table class="table">
            <thead>
            <tr>
                <th>
                <label>
                    <input type="checkbox" class="checkbox" />
                </label>
                </th>
                <th>Preview</th>
                <th>Nome</th>
                <th>URL Image</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="actor in store.getActors" :key="actor.id">
                    <th>
                        <label>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </th>
                    <td>
                    <div class="flex items-center gap-3 min-w-64">
                        <div class="avatar">
                            <div v-if="!configStore.isAnonymous" class="mask mask-circle w-12 h-12">
                                <img :src="actor.avatarUrl" :alt="actor.name" />
                            </div>
                            <div v-else class="skeleton rounded-full w-12 h-12"></div>
                        </div>
                        <div>
                            <div v-if="!configStore.isAnonymous" class="font-bold">{{ actor.name }}</div>
                            <div v-else class="flex flex-row items-center">
                                <span class="flex flex-row items-center" v-for="skeleton in getAnonymousSkeleton(actor.name)" :key="skeleton.prefix">
                                    <p class="font-bold">{{ skeleton.prefix }} </p>
                                    <span class="skeleton h-4 rounded-none" :class="skeleton.widthClass"></span>
                                </span>
                            </div>
                            <div class="text-sm opacity-50"> {{ phrases[Math.floor(Math.random() * 10 + 1)] }}</div>
                        </div>
                    </div>
                    </td>
                    <td v-if="!configStore.isAnonymous"  class="min-w-48">
                        {{ actor.name }}
                    </td>
                    <td v-else class="min-w-48 flex flex-row items-center">
                        <span class="flex min-h-12 items-center" v-for="skeleton in getAnonymousSkeleton(actor.name)" :key="skeleton.prefix">
                            <span class="font-bold">{{ skeleton.prefix }} </span>
                            <span :class="skeleton.widthClass" class="skeleton h-4 rounded-none" ></span>
                        </span>
                    </td>
                    <td class="w-full">{{ actor.avatarUrl.substring(0, 100) }} ...</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">

const configStore = useConfigurationStore();
const store = useDiscordStore()

const phrases = ref([
        "Brow, faz sol", "Eee o que?", "Teu amor me pegou",
        "Geladeira Tsunami!!", "Escreve e sai correndo...",
        "Deixou chegar", "Tem que aturar", "E o pix, nada ainda ?",
        "Reeeal, me dá um real", "OooOh Potência!"
    ])

// methods
const getAnonymousSkeleton = (name: string) => {
    return name.split(" ").map(n => {
        return {
            prefix: n.charAt(0),
            widthClass: `w-${n.substring(1).length  * 2}`,
        }
    })
}

</script>