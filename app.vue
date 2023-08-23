<template>
  <NuxtLayout>
    <NuxtLoadingIndicator>
      <div class="text-3xl">
        Just wait a moment...
      </div>
    </NuxtLoadingIndicator>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import './app.css'
import './assets/global.scss'
</script>