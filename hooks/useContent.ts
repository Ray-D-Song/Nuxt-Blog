import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

type Content = ParsedContent & {
	_path: string
	cover: string
	description: string
	title: string
}

async function useContent() {
	const contentList = ref(<Content[]>(await queryContent('/').find()).reverse())
	const idTitleMap = ref(new Map())
	contentList.value.forEach(item => {
		idTitleMap.value.set(item._path.slice(1), item.title)
	})

	return { contentList, idTitleMap }
}

export type {
	Content
}

export {
	useContent
}
