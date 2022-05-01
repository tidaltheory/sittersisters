module.exports = {
	extends: ['@zazen', 'next/core-web-vitals'],
	rules: {
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/__tests__/**/*.{mjs,js,ts,tsx}',
					'**/*.@(spec|test).{mjs,js,ts,tsx}',
					'tailwind.config.js',
				],
			},
		],

		'unicorn/prefer-module': 'off',
	},
}
