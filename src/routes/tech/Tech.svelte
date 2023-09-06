<script>
    // @ts-nocheck
    export let name;
    export let icon;
    export let color;
</script>

<div class="flex flex-col justify-center items-center group/tech">
    <svg contenteditable="true" bind:innerHTML={icon} class="fill-current text-text-color h-20 transition-colors duration-300 w-12 sm:w-16 md:w-20" style="--color:{color};" />
    <p class="text-text-color text-center my-1 md:mt-2 -translate-y-full opacity-0 group-hover/tech:opacity-100 group-hover/tech:translate-y-0 transition-all duration-300 text-xs sm:text-sm md:text-base">{name}</p>
</div>

<style>
    svg:hover {
        color: var(--color);
    }
</style>