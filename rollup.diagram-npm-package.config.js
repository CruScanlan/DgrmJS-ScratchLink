import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';

export default [
	{
		input: 'src/app/dgrm/diagram/app-diagram-factory.js',
		output: {
			file: 'dist/diagram-npm-package/factory.js',
			format: 'es',
			plugins: [
				/* terser({
					mangle: {
						keep_classnames: false,
						keep_fnames: false,
						properties: {
							regex: /^_/
						}
					}
				}) */
			]
		},
		plugins: [
			babel({
				presets: ['@babel/preset-env']
			})
		]
	},
	{
		input: 'src/app/dgrm/diagram/app-diagram-serializable.js',
		output: {
			file: 'dist/diagram-npm-package/serializable.js',
			format: 'es',
			plugins: [
				/* terser({
					mangle: {
						keep_classnames: false,
						keep_fnames: false,
						properties: {
							regex: /^_/
						}
					}
				}) */
			]
		},
		plugins: [
			babel({
				presets: ['@babel/preset-env']
			})
		]
	},
];
