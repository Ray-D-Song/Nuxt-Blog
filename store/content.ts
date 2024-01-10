import { defineStore } from 'pinia'
import { type Content } from '~/hooks/useContent'

interface ContentStoreState {
	contentList: Array<Content>
}

export const useContentStore = defineStore('contentStore', {
	state(): ContentStoreState {
	    return {
				contentList: []
			}
	},
	getters: {
		idTitleMap() {
			const idTitleMap = ref(new Map())
			this.contentList.forEach(item => {
				idTitleMap.value.set(item._path.slice(1), item.title)
			})
			return idTitleMap
		}
	},
	actions: {
		initStore(initList: Array<Content>) {
			this.contentList = initList
		}
	}
})
