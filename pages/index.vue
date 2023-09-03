<template>
  <div class="flex flex-row w-full justify-center">
    <div class="flex flex-col items-center">
      <Card
        v-for="p in contentList"
        :title="p.title"
        :description="p.description"
        :cover="p.cover"
        :_path="p._path"
      />
    </div>
    <div class="hidden md:block md:ml-16 markdown w-96">
    </div>
    <div class="hidden md:block markdown fixed sm:w-2/6 lg:w-2/5 bottom-0 right-20 h-screen">
      <div class="h-full flex flex-col justify-center">
        <div class="text-3xl">Hi, this is <span class="italic underline">Ray-D-Song</span>'s Blog.</div>
        <div class="text-xl my-5">My primary job is a web front-end development engineer. <br/> But I also dabble in various other technologies.</div>
        <div class="text-xl">You can click the icon button to subscribe to the RSS feed or check out my GitHub.</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '~/components/card.vue'
import type {ParsedContent} from '@nuxt/content/dist/runtime/types'

type Content = ParsedContent & {
  cover: string
  description: string
}

const contentList = <unknown>(await queryContent('/').find()).reverse() as Content
</script>
