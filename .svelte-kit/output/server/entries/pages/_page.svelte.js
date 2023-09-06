import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index2.js";
import Page$1 from "./projects/_page.svelte.js";
import Page$2 from "./tech/_page.svelte.js";
import Page$3 from "./contact/_page.svelte.js";
const polygon = "/_app/immutable/assets/polygon.b83e9b15.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-o28wy-polygon2{from{opacity:0;right:-8rem;top:-6.25rem}to{opacity:1;right:6rem;top:-6rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-s9d471_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-s9d471_END -->`, ""}

<section><div class="relative w-full h-screen grid place-items-center pb-8"><img${add_attribute("src", polygon, 0)} alt="Red polygon" class="absolute -right-32 animate-[fadein_500ms_ease_0ms]" style="top: -6.25rem">
        <img${add_attribute("src", polygon, 0)} alt="Red polygon" class="absolute -top-24 -right-24 animate-polygon2" style="transform: rotate(-6deg)">
        <img${add_attribute("src", polygon, 0)} alt="Red polygon" class="absolute -top-20 -right-16 animate-polygon3" style="transform: rotate(-12deg)">
        <img${add_attribute("src", polygon, 0)} alt="Red polygon" class="absolute -top-16 -right-8 animate-polygon4" style="transform: rotate(-18deg)">
        <img${add_attribute("src", polygon, 0)} alt="Red polygon" class="absolute -top-12 -right-0 animate-polygon5" style="transform: rotate(-24deg)">
        <h1 class="text-4xl md:text-6xl lg:text-8xl text-text-color animate-dropin">Hi, I&#39;m Nick <br> a computer scientist</h1></div>
    ${validate_component(Page$1, "Projects").$$render($$result, {}, {}, {})}
    ${validate_component(Page$2, "Tech").$$render($$result, {}, {}, {})}
    ${validate_component(Page$3, "Contact").$$render($$result, {}, {}, {})}
</section>`;
});
export {
  Page as default
};
