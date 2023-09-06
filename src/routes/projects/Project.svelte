<script>
    // Hoi Nick rat mal wer das gschriebe het lol
    // @ts-nocheck
    export let number;
    export let title;
    export let imgPath;
    export let alt;
    export let text;
</script>

<div class="relative p-4 rounded text-text-color bg-primary-accent-color mb-10">
    <h3 class="absolute right-0 -top-9 text-3xl md:text-5xl text-secondary-color" id="number">{number}</h3>
    <h2 class="text-3xl">{title}</h2>
    <div class="flex flex-col md:flex-row gap-8">
        <img href={imgPath} {alt} />
        <p class="mt-2">{text}</p>
    </div>
</div>

<style>
    #number {
        background: -webkit-linear-gradient(var(--secondary-color) 50%, var(--primary-accent-color) 36px);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
