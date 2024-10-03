<script>
	import HoverBorderGradient from './HoverBorderGradient.svelte';
</script>

<nav
	class="w-full bg-[#F8F8F8] z-[1090] border-b p-2 fixed top-0 left-0 flex items-center justify-around rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
>
	<h1 class="font-semibold text-xl">
		<a data-sveltekit-preload-data="hover" href="/">Gaurav Blogs</a>
	</h1>
	<ul class="flex items-center gap-2">
		<HoverBorderGradient
			containerClassName="rounded-full"
			as="button"
			className="bg-black text-black flex items-center px-6"
		>
			<a data-sveltekit-preload-data="hover" href="/blogs">Blogs</a>
		</HoverBorderGradient>
		<li class="font-medium">
			<a target="_blank" href="https://github.com/TheGauravsahu/Gaurav-Blogs">Github</a>
		</li>
	</ul>
</nav>
