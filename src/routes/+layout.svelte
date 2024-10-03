<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

<Navbar />
<main class="min-h-screen w-full mt-14 mx-auto">
	<slot />
</main>
<Footer />
