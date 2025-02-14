import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';
const forGithubPages = true;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(
			{
				fallback: 'index.html',
				pages: 'build',
				assets: 'build',
				precompress: true,
				strict: true
			}
		),
		paths: {
			base: forGithubPages ? '/m0m3nt0m4g1c0' : ''
		},
	}

};

export default config;
