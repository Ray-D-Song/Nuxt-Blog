import fs from 'fs'
import path from 'path'
import { element } from 'sitemap/dist/lib/sitemap-xml.js'

async function main() {
	// 文件夹路径
	const folderPath = './content'

	const files = fs.readdirSync(folderPath)
	const fileNames = files
		.map(file => path.parse(file).name)
		.filter(element => element.length === 13)


	const preload = fs.readFileSync('./bin/preload.json', 'utf-8')
	let preloadList = JSON.parse(preload)

	const missingElements = fileNames
		.filter(element => !preloadList.includes(element))

	for(const item of missingElements) {
		const response = await fetch(`${process.env.WORKER_URL}/${item}`, {
			method: 'get'
		})
		if(response.ok) {
			preloadList.push(String(item))
			console.log(`文章 ${item} 已添加完毕`)
		}
	}

	fs.writeFileSync('./bin/preload.json', JSON.stringify(preloadList))
}

await main()
