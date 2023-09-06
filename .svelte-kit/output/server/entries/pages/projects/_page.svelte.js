import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "../../../chunks/index2.js";
/* empty css                                                     */import { S as Saos } from "../../../chunks/Saos.js";
const css = {
  code: "#number.svelte-1hif1mk{background:-webkit-linear-gradient(var(--secondary-color) 50%, var(--primary-accent-color) 36px);-webkit-background-clip:text;-webkit-text-fill-color:transparent}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { number } = $$props;
  let { title } = $$props;
  let { imgPath } = $$props;
  let { alt } = $$props;
  let { text } = $$props;
  if ($$props.number === void 0 && $$bindings.number && number !== void 0)
    $$bindings.number(number);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.imgPath === void 0 && $$bindings.imgPath && imgPath !== void 0)
    $$bindings.imgPath(imgPath);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css);
  return `<div class="relative p-4 rounded text-text-color bg-primary-accent-color mb-10"><h3 class="absolute right-0 -top-9 text-3xl md:text-5xl text-secondary-color svelte-1hif1mk" id="number">${escape(number)}</h3>
    <h2 class="text-3xl">${escape(title)}</h2>
    <div class="flex flex-col md:flex-row gap-8"><img${add_attribute("href", imgPath, 0)}${add_attribute("alt", alt, 0)}>
        <p class="mt-2">${escape(text)}</p></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="mb-16"><h1 class="text-4xl md:text-6xl lg:text-8xl text-secondary-color mb-16 animate-dropin">Projects</h1>
    
    ${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      animation: "from-left 500ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both",
      once: true
    },
    {},
    {
      default: () => {
        return `${validate_component(Project, "Project").$$render(
          $$result,
          {
            number: "01",
            title: "Games website",
            imgPath: "/",
            alt: "Games website screenshot",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsa, unde rerum doloribus ipsam pariatur consequatur sed dolore, quam nesciunt dolorum ut vel illo dolor cumque debitis repudiandae, harum voluptates."
          },
          {},
          {}
        )}`;
      }
    }
  )}
    ${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      animation: "from-right 500ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both",
      once: true
    },
    {},
    {
      default: () => {
        return `${validate_component(Project, "Project").$$render(
          $$result,
          {
            number: "02",
            title: "Games website",
            imgPath: "/",
            alt: "Games website screenshot",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsa, unde rerum doloribus ipsam pariatur consequatur sed dolore, quam nesciunt dolorum ut vel illo dolor cumque debitis repudiandae, harum voluptates."
          },
          {},
          {}
        )}`;
      }
    }
  )}
    ${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      animation: "from-left 500ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both",
      once: true
    },
    {},
    {
      default: () => {
        return `${validate_component(Project, "Project").$$render(
          $$result,
          {
            number: "03",
            title: "Games website",
            imgPath: "/",
            alt: "Games website screenshot",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsa, unde rerum doloribus ipsam pariatur consequatur sed dolore, quam nesciunt dolorum ut vel illo dolor cumque debitis repudiandae, harum voluptates."
          },
          {},
          {}
        )}`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
