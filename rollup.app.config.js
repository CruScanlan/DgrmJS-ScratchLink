import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
//import replace from '@rollup/plugin-replace';
import { babel } from '@rollup/plugin-babel';

export default {
	input: 'src/app/index.js',
	output: {
		file: 'dist/app/index.js',
		format: 'iife',
		plugins: [
			terser({
				mangle: {
					keep_classnames: false,
					keep_fnames: false,
					properties: {
						regex: /^_/
					}
				}
			})]
	},
	plugins: [
		minifyHTML({
			options: {
				shouldMinify(template) {
					return (
						template.parts.some(part => {
							return (
								part.text.includes('<style') ||
								part.text.includes('<div')
							);
						})
					);
				}
			}
		}),
		//replace({ preventAssignment: true, 'https://localhost:7156/api': 'https://dgrm.boyko.tech/api' }),
		/* babel({
			presets: ['@babel/preset-env']
		}) */
	]
};
