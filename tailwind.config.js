module.exports = {
	content: ['./components/**/*.tsx', './pages/**/*.tsx'],
	theme: {
		fontFamily: {
			sofia: 'Sofia, sans-serif',
		},

		fontMetrics: {
			sofia: {
				capHeight: 689,
				ascent: 750,
				descent: -250,
				lineGap: 0,
				unitsPerEm: 1000,
			},
		},

		extend: {
			colors: {
				orange: {
					light: '#fbb040',
					dark: '#e76425',
				},
				blue: {
					light: '#27aae1',
					dark: '#3a4d81',
				},
				red: {
					light: '#f59aa7',
					dark: '#e4028c',
				},
				green: {
					light: '#8cd1c8',
					dark: '#54c3bb',
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-capsize')({ className: 'leading-trim' }),
		require('tailwindcss-opentype'),
	],
}
