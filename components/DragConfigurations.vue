<template>
  <div
    class="bg-base-300 min-w-64 rounded-md py-8 px-6"
    ref="el"
    :style="style"
    style="position: fixed"
  >
    <h4 class="font-bold text-center">
      Safe Configs
      <span class="px-2"
        ><Icon name="streamline-emojis:baby-angel-1" color="black"
      /></span>
    </h4>
    <div class="form-control mt-4">
      <label class="label cursor-pointer">
        <span class="label-text">
          Usando
          {{
            configStore.storageType === "localStorage"
              ? "LocalStorage"
              : "SessionStorage"
          }}</span
        >
        <input
          type="checkbox"
          class="toggle toggle-sm ml-4"
          checked
          @click="updateStorageType()"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Modo Anônimo</span>
        <input
          type="checkbox"
          class="toggle toggle-sm toggle-success ml-4"
          :checked="configStore.isAnonymous"
          @click="updateAnonimous()"
        />
      </label>
    </div>

    <div class="dropdown dropdown-left dropdown-end w-full">
      <div tabindex="0" role="button" class="btn m-1">Selecione o Tema</div>
      <ul
        tabindex="0"
        class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li v-for="theme of themes" :key="theme">
          <a @click="configStore.updateTheme(theme)">{{ theme }}</a>
        </li>
      </ul>
      <input
        hidden
        type="radio"
        :value="configStore.getTheme"
        data-key="discord-theme"
        class="radio theme-controller"
        checked
      />
    </div>
  </div>
</template>



<script lang="ts" setup>
const configStore = useConfigurationStore();
const el = ref<HTMLElement | null>(null);

const themes = ref(["dark", "night", "synthwave", "coffee"]);

const updateStorageType = () => {
  configStore.changeStorageType();
};

const updateAnonimous = () => {
  configStore.changeAnonymous();
};

const { style, position } = useDraggable(el, {
  initialValue: {
    x: configStore.position.x || 780,
    y: configStore.position.y || 460,
  },
});

watch(ref(position), (newValue) => {
  if (newValue) {
    configStore.updatePosition(position.value);
  }
});
</script>