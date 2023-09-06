<script>
  // @ts-nocheck
  export let url;
  export let icon;
  export let text;
  import Fa from "svelte-fa";
</script>

<a href={url} target="_blank" class="flex flex-row items-center group">
  <Fa {icon} class="scale-125 sm:rotate-90" />
  <div
    class="hidden sm:block -translate-x-3/4 pointer-events-none w-0 ml-0 group-hover:ml-2 group-hover:w-14 transition-all duration-200"
  >
    <p
      class="group-hover:translate-x-3/4 opacity-0 group-hover:opacity-100 transition-all duration-200"
    >
      {text}
    </p>
  </div>
</a>
