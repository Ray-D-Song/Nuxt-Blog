// uno.config.ts
import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
import { presetTypography, presetUno, presetIcons } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
	transformers: [
		transformerDirectives(),
	],
	presets: [
		presetWind(),
		presetUno(),
		presetTypography({
			selectorName: 'markdown'
		}),
		presetIcons()
	],
	theme: {
		backgroundColor: {
			'code-dark': '#21242B',
			'code-light': '#FFFFFF',
			'curtain-light': '#F4F6F9',
			'curtain-dark': '#23283C',
			'select-dark': '#353535',
			'select-light': '#AFC4D5'
		},
		width: {
			'9/10': '90%',
			'7/10': '70%'
		},
		spacing: {
			'24p': '24%'
		}
	}
})
