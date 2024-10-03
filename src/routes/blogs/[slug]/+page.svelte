<script lang="ts">
	import type { PageData } from '../[number]/$types';
	import { onMount } from 'svelte';
	import Prism from 'prismjs';
	import 'prismjs/themes/prism-solarizedlight.css';
	import 'github-markdown-css/github-markdown-light.css';

	export let data: PageData;

	onMount(() => {
		Prism.highlightAll();
	});
</script>


<svelte:head>
	<title>{data.title} - Gaurav Blogs</title>
	<meta name="description" content={data.bodyHTML || "Explore engaging articles on technology, lifestyle, and more at Gaurav Blogs."} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.bodyHTML || "Explore engaging articles on technology, lifestyle, and more at Gaurav Blogs."} />
	<meta property="og:type" content="article" />
</svelte:head>

<section class="bg-white">
	<!-- Background pattern -->
	<div
		class="absolute min-h-screen w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
		<!-- Blog Title -->
		<h1 class="text-5xl font-bold mb-4">{data.title}</h1>

		<!-- Author Section -->
		<div class="mt-12 p-6 bg-gray-100 rounded-lg shadow mb-4">
			<h3 class="text-lg font-semibold mb-2">About the Author</h3>
			<div class="flex gap-2 items-center">
				<img src={data.author.avatarUrl} alt="" class="h-10 w-10 rounded-full bg-gray-50" />
				<div class="text-sm leading-5">
					<p>{data.author.login}</p>
					<time datetime="" class="text-gray-500">{new Date(data.createdAt).toLocaleDateString()}</time>
				</div>
			</div>
		</div>

		<div class="prose prose-lg max-w-none mx-auto markdown-body">
			{@html data.bodyHTML}
		</div>
	</div>
</section>

<style>
	h1,
	h2,
	h3 {
		font-family: 'Manrope', system-ui;
	}
	h1 {
		font: 60px;
	}
</style>
