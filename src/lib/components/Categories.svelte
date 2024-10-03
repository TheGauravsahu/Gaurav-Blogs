<script>
	import Button from './ui/button/button.svelte';
</script>

<section class="py-12 lg:pt-0 w-full bg-transparent z-[1090]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-4xl font-bold text-center mb-10">Categories</h2>
		<div class="flex flex-wrap justify-center gap-4">
			<!-- Example Category Tags -->
			{#each ['Technology', 'Lifestyle', 'Travel', 'Health', 'Finance'] as category}
				<Button>
					<a href="/blogs">
						{category}
					</a>
				</Button>
			{/each}
		</div>
	</div>
</section>
