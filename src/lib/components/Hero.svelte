<script lang="ts">
	import HoverBorderGradient from '$lib/components/HoverBorderGradient.svelte';
</script>

<div class="pt-8 min-h-[30rem] bg-transparent z-[1090]">
	<div class="mx-auto flex max-w-2xl flex-col items-center">
		<div class="mb-8 flex">
			<a
				data-sveltekit-preload-data="hover"
				href="/blogs"
				rel="noopener noreferrer"
				class="inline-flex"
			>
				<span class="relative inline-block overflow-hidden rounded-full p-[1px]">
					<span
						class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]"
					></span>
					<div
						class="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200"
					>
						New Blogs ⚡️
						<span class="inline-flex items-center pl-2 text-black dark:text-white"
							>Read more
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="pl-0.5 text-black dark:text-white"
							>
								<path d="M5 12h14"></path>
								<path d="m12 5 7 7-7 7"></path>
							</svg>
						</span>
					</div>
				</span>
			</a>
		</div>
		<h1 class="text-center font-semibold text-6xl">Explore the Best Blogs Out There</h1>
		<p class="mt-6 text-center text-lg leading-6 text-gray-600">
			Dive into a World of Inspiration: Discover captivating stories and insights that ignite your
			imagination and elevate your knowledge.
		</p>
		<div class="mt-10 flex gap-4">
			<HoverBorderGradient
				containerClassName="rounded-full"
				as="button"
				className="bg-black text-black flex items-center px-6"
			>
				<a data-sveltekit-preload-data="hover" href="/blogs">Go to Blogs -></a>
			</HoverBorderGradient>
		</div>
	</div>
</div>
