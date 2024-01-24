<template>
  <div class="my-0 mx-auto max-w-screen-xl">
    <Header />
    <div class="mx-4 pb-8">
      <slot />
    </div>
    <drag-configurations />
  </div>
  <Footer />
</template>