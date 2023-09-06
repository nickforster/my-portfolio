<script>
    // @ts-nocheck
    export let image;
</script>

<div class="animate-fadein relative overflow-hidden group mx-2 my-4">
    <div class="relative overflow-hidden group w-full">
        <img src={image.src} alt={image.text} class="group-hover:brightness-50 transition-all duration-500 w-full" />
        <p class="text-text-color absolute left-4 bottom-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{image.text}</p>
    </div>
</div>
