<template>
  <div class="flex flex-row w-full justify-center">
    <div class="flex flex-col items-center">
      <div
        v-for="c in contentStore.contentList"
        @click="handleGoArticle(c._path)"
        class="hover:cursor-pointer dark:text-white/80 text-black/80 m-5 w-full flex flex-col"
        >
        <span class="mr-12 text-sm dark:text-white/60 text-black/60">
          {{ parsePath2Time(c._path) }}
        </span>
        <span class="text-xl font-mono font-medium truncate">
          {{ c.title }}
        </span>
      </div>
    </div>
    <div class="hidden md:block md:ml-16 markdown w-96">
    </div>
    <div class="hidden md:block markdown fixed sm:w-2/6 lg:w-2/5 bottom-0 right-20 h-screen">
      <div class="h-full flex flex-col justify-center">
        <div class="text-3xl italic">Ray-D-Song</div>
        <div class="text-xl my-5">My primary job is a web front-end development engineer. <br/> But I also dabble in various other technologies.</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { parsePath2Time } from '~/utils/parser'
import { useContentStore } from '~/store/content'

const contentStore = useContentStore()

const router = useRouter()
const handleGoArticle = (path: string) => {
  router.push({
    path: 'post' + path,
  })
}

useHead({
	title: "Ray-D-Song's Blog"
})
useSeoMeta({
	title: "Ray-D-Song's Blog",
	ogTitle: "Ray-D-Song's Blog",
	description: '这是某个不知名开发者的兴趣博客'
})
</script>
