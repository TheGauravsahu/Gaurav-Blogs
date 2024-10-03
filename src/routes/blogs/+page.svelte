<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import BorderBeam from '$lib/components/BorderBeam.svelte';

	const blogs = data.nodes;

	function getExcerpt(body: string, wordCount: number): string {
		const words = body.split(/\s+/); // Split body text into words
		const excerpt = words.slice(0, wordCount).join(' '); // Join the first n words
		return excerpt + (words.length > wordCount ? '...' : ''); // Add ellipsis if truncated
	}
</script>

<section class="py-12 overflow-hidden">
	<div class="relative h-full w-full bg-white">
		<div
			class="absolute min-h-screen w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
		></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h1 class="text-5xl font-bold text-center mb-10">Our Blogs</h1>
		<p class="text-center text-lg text-gray-600 mb-12">
			Dive into our latest articles and explore a wealth of knowledge.
		</p>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each blogs as blog}
				<article
					class="flex max-w-xl flex-col items-start justify-between relative rounded-3xl p-7 border border-gray-700/70 bg-background"
				>
					<BorderBeam size={150} duration={12} />
					<div class="flex items-center gap-x-4 text-xs">
						<time datetime="" class=""
							>{new Date(blog.createdAt).toLocaleDateString()}</time
						>
					</div>
					<div class="group relative">
						<h3 class="mt-3 text-lg font-semibold leading-6">
							<a data-sveltekit-preload-data="hover" href="/blogs/{blog.number}">
								<span class="absolute inset-0"></span>
								{blog.title}
							</a>
						</h3>
						<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
							<a data-sveltekit-preload-data="hover" href="/blogs/{blog.number}">
								{getExcerpt(blog.body, 30)}
							</a>
						</p>
					</div>
					<div class="relative mt-8 flex items-center gap-x-4">
						<img
							src={blog.author.avatarUrl}
							alt="bhide"
							class="h-10 w-10 rounded-full bg-gray-50"
						/>
						<div class="text-sm leading-5">
							<p class="text-gray-500">{blog.author.login}</p>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
