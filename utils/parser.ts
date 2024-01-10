function parseSearchResultItem(idStr: string): string {
	const idx = idStr.indexOf('#')
	if(idx !== -1) {
		return idStr.substring(0, idx).slice(1)
	}
	return ''
}

function parsePath2Time(path: string) {
	const timestamp = path.slice(1)
	const date = new Date(Number(timestamp))
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')

	return `${year}/${month}/${day}`
}

function parseContentWithKeyWord(content: string, keyWord: string) {
	// 将关键词和内容都转换为小写
	const lowerCaseContent = content.toLowerCase()
	const lowerCaseKeyWord = keyWord.toLowerCase()

	// 寻找关键词在内容中的索引
	const index = lowerCaseContent.indexOf(lowerCaseKeyWord)

	// 如果关键词不存在，返回空字符串
	if (index === -1) {
		return ''
	}

	// 截取关键词前4个字符到关键词后10个字符的字符串
	const startIndex = Math.max(0, index - 4)
	const endIndex = Math.min(content.length, index + keyWord.length + 10)

	return content.substring(startIndex, endIndex)
}

export {
	parsePath2Time,
	parseSearchResultItem,
	parseContentWithKeyWord
}
