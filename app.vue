<template>
  <NuxtLayout>
    <LoadingBar v-show="loadingVisible"/>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import './assets/global.scss'
// @ts-expect-error virtual file
import { globalMiddleware } from '#build/middleware'
import { useContentStore } from '~/store/content'
import type { Content } from '~/hooks/useContent'

const router = useRouter()
const nuxtApp = useNuxtApp()

const contentStore = useContentStore()
const contentList = <Content[]>(await queryContent('/').find()).reverse()
contentStore.initStore(contentList)

const loadingVisible = ref(false)
const closeLoading = () => {
  loadingVisible.value = false
}
const startLoading = () => {
  loadingVisible.value = true
}
globalMiddleware.unshift(() => {
  startLoading()
})
router.onError(() => {
  closeLoading()
})
router.beforeResolve((to, from) => {
  if (to === from || to.matched.every((comp, index) => comp.components && comp.components?.default === from.matched[index]?.components?.default)) {
    closeLoading()
  }
})
router.afterEach((_to, _from, failure) => {
  if (failure) {
    closeLoading()
  }
})
const unsubPage = nuxtApp.hook('page:finish', closeLoading)
const unsubError = nuxtApp.hook('vue:error', closeLoading)
onBeforeUnmount(() => {
  const index = globalMiddleware.indexOf(startLoading)
  if (index >= 0) {
    globalMiddleware.splice(index, 1)
  }
  unsubPage()
  unsubError()
})
</script>
