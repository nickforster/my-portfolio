<script>
    // @ts-nocheck
    import polygon from "$lib/images/polygon.svg";
    import polygon1 from "$lib/images/polygon.svg?raw";
    
    import Projects from "./projects/+page.svelte"
    import Tech from "./tech/+page.svelte"
    import Contact from "./contact/+page.svelte"
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <div class="relative w-full h-screen grid place-items-center pb-8">
        <img src={polygon} alt="Red polygon" class="absolute -right-32 animate-[fadein_500ms_ease_0ms]" style="top: -6.25rem" />
        <img src={polygon} alt="Red polygon" class="absolute -top-24 -right-24 animate-polygon2" style="transform: rotate(-6deg)" />
        <img src={polygon} alt="Red polygon" class="absolute -top-20 -right-16 animate-polygon3" style="transform: rotate(-12deg)" />
        <img src={polygon} alt="Red polygon" class="absolute -top-16 -right-8 animate-polygon4" style="transform: rotate(-18deg)" />
        <img src={polygon} alt="Red polygon" class="absolute -top-12 -right-0 animate-polygon5" style="transform: rotate(-24deg)" />
        <h1 class="text-4xl md:text-6xl lg:text-8xl text-text-color animate-dropin">Hi, I'm Nick <br /> a computer scientist</h1>
    </div>
    <Projects />
    <Tech />
    <Contact />
</section>

<style lang="postcss">
	@keyframes polygon2 {
		from {
			opacity: 0;
			right: -8rem;
			top: -6.25rem;
		}
		to {
			opacity: 1;
			right: 6rem;
			top: -6rem;
		}
	}
</style>
