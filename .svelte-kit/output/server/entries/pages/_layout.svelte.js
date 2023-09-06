import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../chunks/index2.js";
import { faGithub, faInstagram, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
/* empty css                                                  *//* empty css                                                */const logo = "/_app/immutable/assets/logo.1b2065c4.png";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header><div class="fixed w-full flex flex-row justify-between sm:justify-start px-5 py-3 gap-12 z-10 transition-all duration-300 animate-dropin" id="header"><a href="/"><img${add_attribute("src", logo, 0)} alt="SvelteKit" class="h-8"></a>

        
        <div class="flex flex-col items-end gap-2 sm:hidden z-50"><span class="block w-10 h-1 bg-text-color rounded transition-all duration-300" id="span1"></span>
            <span class="block w-8 h-1 bg-text-color rounded transition-all duration-300" id="span2"></span>
            <span class="block w-6 h-1 bg-text-color rounded transition-all duration-300" id="span3"></span></div>

        <div class="text-text-color text-right fixed right-0 h-full w-3/4 top-0 p-8 pt-16 text-2xl z-20 shadow-xl translate-x-full transition-all duration-300 sm:translate-x-0 sm:static sm:shadow-none sm:p-0 bg-primary-color sm:bg-transparent" id="nav"><ul class="flex flex-col justify-evenly items-center h-full sm:flex-row"><li><a href="/projects" class="hover:text-secondary-color transition-colors duration-300">Projects</a></li>
                <li><a href="/tech" class="hover:text-secondary-color transition-colors duration-300">Tech</a></li>
                <li><a href="/contact" class="hover:text-secondary-color transition-colors duration-300">Contact</a></li>
                <li><a href="/blog" class="hover:text-secondary-color transition-colors duration-300">Intern</a></li></ul></div></div></header>

`;
});
const parseNumber = parseFloat;
function joinCss(obj, separator = ";") {
  let texts;
  if (Array.isArray(obj)) {
    texts = obj.filter((text) => text);
  } else {
    texts = [];
    for (const prop in obj) {
      if (obj[prop]) {
        texts.push(`${prop}:${obj[prop]}`);
      }
    }
  }
  return texts.join(separator);
}
function getStyles(style, size, pull, fw) {
  let float;
  let width;
  const height = "1em";
  let lineHeight;
  let fontSize;
  let textAlign;
  let verticalAlign = "-.125em";
  const overflow = "visible";
  if (fw) {
    textAlign = "center";
    width = "1.25em";
  }
  if (pull) {
    float = pull;
  }
  if (size) {
    if (size == "lg") {
      fontSize = "1.33333em";
      lineHeight = ".75em";
      verticalAlign = "-.225em";
    } else if (size == "xs") {
      fontSize = ".75em";
    } else if (size == "sm") {
      fontSize = ".875em";
    } else {
      fontSize = size.replace("x", "em");
    }
  }
  return joinCss([
    joinCss({
      float,
      width,
      height,
      "line-height": lineHeight,
      "font-size": fontSize,
      "text-align": textAlign,
      "vertical-align": verticalAlign,
      "transform-origin": "center",
      overflow
    }),
    style
  ]);
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  return joinCss(
    [
      `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
      `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
      rotate && `rotate(${rotate}${rotateUnit})`
    ],
    " "
  );
}
const fa_svelte_svelte_type_style_lang = "";
const css = {
  code: ".spin.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 2s 0s infinite linear}.pulse.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 1s infinite steps(8)}@keyframes svelte-1cj2gr0-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { id = "" } = $$props;
  let { style = "" } = $$props;
  let { icon } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  let { fw = false } = $$props;
  let { pull = "" } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = "" } = $$props;
  let { flip = false } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let i;
  let s;
  let transform;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css);
  i = icon && icon.icon || [0, 0, "", [], ""];
  s = getStyles(style, size, pull, fw);
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? `<svg${add_attribute("id", id || void 0, 0)} class="${[
    "svelte-fa " + escape(clazz, true) + " svelte-1cj2gr0",
    (pulse ? "pulse" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${add_attribute("style", s, 0)} viewBox="${"0 0 " + escape(i[0], true) + " " + escape(i[1], true)}" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><g transform="${"translate(" + escape(i[0] / 2, true) + " " + escape(i[1] / 2, true) + ")"}" transform-origin="${escape(i[0] / 4, true) + " 0"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>` : `
          <path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>
          <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>`}</g></g></svg>` : ``}`;
});
const Referencelink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let { icon } = $$props;
  let { text } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<a${add_attribute("href", url, 0)} target="_blank" class="flex flex-row items-center group">${validate_component(Fa, "Fa").$$render($$result, { icon, class: "scale-125 sm:rotate-90" }, {}, {})}
  <div class="hidden sm:block -translate-x-3/4 pointer-events-none w-0 ml-0 group-hover:ml-2 group-hover:w-14 transition-all duration-200"><p class="group-hover:translate-x-3/4 opacity-0 group-hover:opacity-100 transition-all duration-200">${escape(text)}</p></div></a>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="relative mt-10 animate-fadein"><div class="flex flex-row-reverse sm:fixed items-center justify-center gap-10 origin-bottom-left sm:-rotate-90 left-14 bottom-0 h-4"><div class="text-text-color flex flex-row sm:flex-row-reverse gap-7 items-center justify-center">${validate_component(Referencelink, "Referencelink").$$render(
    $$result,
    {
      url: "https://github.com/nickforster",
      icon: faGithub,
      text: "GitHub"
    },
    {},
    {}
  )}
            ${validate_component(Referencelink, "Referencelink").$$render(
    $$result,
    {
      url: "https://instagram.com/nickforster9",
      icon: faInstagram,
      text: "Instagram"
    },
    {},
    {}
  )}
            ${validate_component(Referencelink, "Referencelink").$$render(
    $$result,
    {
      url: "https://www.facebook.com/profile.php?id=100092615655497",
      icon: faFacebookF,
      text: "Facebook"
    },
    {},
    {}
  )}
            ${validate_component(Referencelink, "Referencelink").$$render(
    $$result,
    {
      url: "https://www.linkedin.com/in/nick-forster-6689a1248/",
      icon: faLinkedinIn,
      text: "Linkedin"
    },
    {},
    {}
  )}
            <a href="mailto:hello@nickforster.ch" target="_blank" class="sm:hidden">${validate_component(Fa, "Fa").$$render($$result, { icon: faEnvelope, class: "scale-125" }, {}, {})}</a>
            <span class="hidden sm:block w-32 h-0.5 bg-text-color rounded"></span></div></div>

    <div class="hidden sm:flex flex-row fixed items-center text-text-color gap-10 origin-bottom-right right-14 bottom-0 rotate-90"><a href="mailto:hello@nickforster.ch" class="text-l hover:text-secondary-color transition-colors duration-300">hello@nickforster.ch </a>
        <span class="block w-20 h-0.5 bg-text-color rounded translate-y-1/2"></span></div>

    <div class="relative bottom-0 flex justify-center w-full py-2 text-text-color mt-4"><span class="absolute top-1 block w-72 h-0.5 bg-text-color rounded"></span>
        <p>Developed by Nick Forster</p></div></footer>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="app group/cursor">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

    <main class="py-16 px-8 sm:px-24 overflow-x-hidden">${slots.default ? slots.default({}) : ``}</main>

    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}

    <div class="fixed top-0 left-0 h-5 w-5 rounded-full bg-text-color pointer-events-none opacity-0 grid place-items-center cursors" id="cursor"></div></div>`;
});
export {
  Layout as default
};
