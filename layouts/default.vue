<template>
  <div @click="()=>resultVisible=false" class="flex items-start min-h-full flex-col justify-between">
    <div class="sticky top-0 flex items-center mb-8 w-full backdrop-blur-3xl z-10 bg-gray-300 dark:bg-black justify-between h-12 shadow-sm">
      <div class="flex items-center" @click="handleRedirect(1)">
        <Icon
          name="oi:code"
          class="w-8 h-8 ml-5 mb-3 font-bold hover:scale-125 mx-3 mt-3 cursor-pointer transform transition duration-300"/>
      </div>
      <div class="flex items-center">
        <div>
          <div @click.stop="()=>resultVisible=true" class="border rounded-lg h-9 mr-4 border-black/60 pl-2 flex align-middle bg-black/5 dark:bg-white/5">
						<div class="i-grommet-icons:search h-9 mr-2 bg-black dark:bg-white"/>
            <input v-model="searchParams" @input="handleSearch" class="focus:border-none focus:outline-none focus:appearance-none rounded-r-lg pl-2" />
          </div>
          <div v-if="resultVisible&&searchResults.length!==0" class="z-50 fixed top-13 mt-1 bg-white border-black/10 opacity-100 border dark:border-white/10 dark:bg-neutral-800 w-40 md:w-80 rounded-md py-4">
            <div v-for="item in searchResults.slice(0, 6)" @click="handleGoArticle(parseSearchResultItem(item.id))" class="w-80 hover:bg-black/30 flex flex-col items-center my-2 hover:cursor-pointer">
              <span class="dark:text-white/60 text-black/60 w-72 truncate">
								{{ id2Title(parseSearchResultItem(item.id)) }}
							</span>
							<span class="w-72 truncate">{{parseContentWithKeyWord(item.content, item.queryTerms[0])}}</span>
            </div>
          </div>
        </div>
				<div
					@click="handleRedirect(2)"
					class="i-grommet-icons:github icon-button"/>
        <div class="w-1"/>
				<div
					@click="handleRedirect(3)"
					class="i-fluent:rss-24-filled icon-button"
				/>
				<div
					@click="toggleColorMode"
					class="i-fluent:dark-theme-24-filled icon-button"
				/>
      </div>
    </div>
    <Toast title="RSS 订阅已复制到剪切板" class="transition-all duration-300" :class="showToast?'opacity-100':'opacity-0'" />
    <div class="flex-center w-full flex-grow">
      <div class="w-4/5 sm:w-7/10 lg:w-3/5 xl:w-3/5 2xl:w-2/5">
        <slot />
      </div>
    </div>
  </div>
  <div class="mt-12 pb-6 text-sm text-center opacity-50 w-full">
      <div>Built with Nuxt 3</div>
      Copyright 2023 © Ray Song
  </div>
</template>

<script setup lang="ts">
import Toast from '~/components/toast.vue'
import * as clipboard from 'clipboard-polyfill'
import type { SearchResultItem } from '~/layouts/types/default.type'
import { parseContentWithKeyWord, parseSearchResultItem } from '../utils/parser'
import { useContentStore } from '~/store/content'
import _ from 'lodash'

const colorMode = useColorMode()
function toggleColorMode() {
  if(colorMode.preference === 'light')
    colorMode.preference = 'dark'
  else colorMode.preference = 'light'
}

const contentStore = useContentStore()
function id2Title(id: string) {
	return contentStore.idTitleMap.value.get(id)
}

const resultVisible = ref(false)
const searchParams = ref('')
const searchResults = ref<SearchResultItem[]>([])
async function search() {
  // @ts-ignore
  searchResults.value = (await searchContent(searchParams)).value
}
const handleSearch = _.debounce(search, 500)
const route = useRoute()
function handleGoArticle(path: string) {
	router.push({
		path: (route.path.includes('post')?'':'post/') + path,
	})
}

const showToast = ref(false)
const router = useRouter()
const routeTable = {
  1: '/',
  2: 'https://github.com/Ray-D-Song',
  3: 'https://ray-d-song.com/rss.xml'
}
function handleRedirect(key: number) {
  switch (key) {
    case 1:
      router.push(routeTable[1])
      break
    case 2:
      window.location.replace(routeTable[2])
      break
    case 3:
      {
        clipboard.writeText(routeTable[3]).then(() => {
          showToast.value = true
          setTimeout(() => {
            showToast.value = false
          }, 2000)
        })
      }
      break
  }
}
</script>
