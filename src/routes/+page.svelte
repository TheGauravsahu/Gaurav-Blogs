<script lang="ts">
	import Categories from '$lib/components/Categories.svelte';
	import FeaturedBlog from '$lib/components/FeaturedBlog.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import type { PageData } from './$types';
	
	export let data: PageData;
	const blogs = data.nodes;
</script>

<section class="min-h-screen flex flex-col justify-between">
	<div class="fixed left-0 top-0 -z-10 min-h-screen w-full">
		<div class="absolute top-0 -z-10 min-h-screen w-full bg-white">
			<div
				class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"
			></div>
		</div>
	</div>

	<div class="relative mx-auto min-h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12 bg-transparent">
		<!-- Hero section -->
		<Hero />

		<!-- Featured Blogs Section -->
		<FeaturedBlog {blogs}/>

		<!-- Categories Section -->
		<Categories />
	</div>
</section>
