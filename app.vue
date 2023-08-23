<template>
  <NuxtLayout>
    <NuxtLoadingIndicator>
      <div class="w-screen h-screen flex flex-col items-center justify-center z-50" :color="loadingBarColor">
        <div class="text-3xl blur-sm">
          Just wait a moment...
        </div>
      </div>
    </NuxtLoadingIndicator>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import './app.css'
import './assets/global.scss'

const colorMode = useColorMode()
const loadingBarColor = computed(() => {
  return colorMode.preference === 'light'?'#201A18':'#ffffff'
})
</script>