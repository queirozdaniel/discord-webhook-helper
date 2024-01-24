export default defineNuxtRouteMiddleware((to, from) => {
  const store = useDiscordStore()
  
  if (!store.canUse) {
    console.warn("Redirecionando para configurar o link do Webhook")
    return navigateTo('/configurations')
  }      
})