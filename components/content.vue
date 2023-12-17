<template>
  <div>
    <div>
      <h1 class="text-4xl text-center font-bold my-2">{{data.title}}</h1>
      <span class="font-mono mb-5 flex justify-center w-full">
        <span class="mr-2">{{time}}</span>
        <span class="ml-2">阅读数: {{readCount}}</span>
      </span>
    </div>
    <ContentRenderer :value="data" class="markdown"/>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const {data} = await useAsyncData(String(route.params._path), () => queryContent('/' + route.params._path).findOne())

const timestamp = data.value?._path?.substr(1)

const time = computed(() => {
  const date = new Date(Number(timestamp))
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
  return formattedDate
})

const readCount = (await useFetch('/api/getReadCount')).data
</script>
