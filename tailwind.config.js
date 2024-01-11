/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
  theme: {
    extend: {
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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  future: {
    hoverOnlyWhenSupported: true
  }
}

