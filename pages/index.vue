<template>
  <div class="flex flex-row w-full justify-center">
    <div class="flex flex-col items-center">
      <div
        v-for="c in contentList"
        @click="handleGoArticle(c._path)"
        class="hover:cursor-pointer dark:text-white/80 text-black/80 m-5 w-full"
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
        <div class="text-3xl">Hi, this is <span class="italic underline">Ray-D-Song</span>'s Blog.</div>
        <div class="text-xl my-5">My primary job is a web front-end development engineer. <br/> But I also dabble in various other technologies.</div>
        <div class="text-xl">You can click the icon button to subscribe to the RSS feed or check out my GitHub.</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {ParsedContent} from '@nuxt/content/dist/runtime/types'

type Content = ParsedContent & {
  cover: string
  description: string
}

function parsePath2Time(path: string) {
  const timestamp = path.slice(1)
  const date = new Date(Number(timestamp))
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  
  return `${year}/${month}/${day}`
}

const contentList = <unknown>(await queryContent('/').find()).reverse() as Content

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
