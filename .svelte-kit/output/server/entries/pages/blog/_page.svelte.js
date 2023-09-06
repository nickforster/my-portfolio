import { c as create_ssr_component, a as add_attribute } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let password = "";
  let allImages = [
    {
      text: "Vor dem Abflug in Zürich",
      src: "arg/abflug.jpg"
    },
    {
      text: "Buenos Aires in der Nacht vom Flieger",
      src: "arg/buenos-aires-nacht.jpeg"
    },
    {
      text: "Meine erste Gastfamilie und die Counselor von Rotary",
      src: "arg/gastfamilie.jpg"
    },
    {
      text: "Buenos Aires in der Nacht vom Flieger",
      src: "arg/buenos-aires-nacht.jpeg"
    },
    {
      text: "Vor dem Abflug in Zürich",
      src: "arg/abflug.jpg"
    },
    {
      text: "Vor dem Abflug in Zürich",
      src: "arg/abflug.jpg"
    },
    {
      text: "Meine erste Gastfamilie und die Counselor von Rotary",
      src: "arg/gastfamilie.jpg"
    },
    {
      text: "Vor dem Abflug in Zürich",
      src: "arg/abflug.jpg"
    },
    {
      text: "Vor dem Abflug in Zürich",
      src: "arg/abflug.jpg"
    },
    {
      text: "Vor dem Abflug in Zürich",
      src: "arg/abflug.jpg"
    },
    {
      text: "Buenos Aires in der Nacht vom Flieger",
      src: "arg/buenos-aires-nacht.jpeg"
    },
    {
      text: "Meine erste Gastfamilie und die Counselor von Rotary",
      src: "arg/gastfamilie.jpg"
    },
    {
      text: "Vor dem Abflug in Zürich",
      src: "arg/abflug.jpg"
    },
    {
      text: "Buenos Aires in der Nacht vom Flieger",
      src: "arg/buenos-aires-nacht.jpeg"
    },
    {
      text: "Meine erste Gastfamilie und die Counselor von Rotary",
      src: "arg/gastfamilie.jpg"
    },
    {
      text: "Vor dem Abflug in Zürich",
      src: "arg/abflug.jpg"
    },
    {
      text: "Buenos Aires in der Nacht vom Flieger",
      src: "arg/buenos-aires-nacht.jpeg"
    },
    {
      text: "Meine erste Gastfamilie und die Counselor von Rotary",
      src: "arg/gastfamilie.jpg"
    }
  ];
  let images = [[], [], []];
  for (let i = 0; i < allImages.length; i++) {
    images[i % 3].push(allImages[i]);
  }
  return `${`<div><h1 class="text-4xl md:text-6xl lg:text-8xl text-secondary-color mb-16 animate-dropin text-center mt-16">Login</h1>
        <form class="flex flex-col gap-4 content-center flex-wrap mb-16"><input type="password" placeholder="Passwort" class="border-secondary-color bg-primary-color placeholder:text-text-color placeholder:text-center border-2 rounded p-2 text-text-color text-center"${add_attribute("value", password, 0)}>
            <button type="submit" class="border-secondary-color hover:bg-secondary-color hover:text-black transition-colors duration-300 border-2 rounded p-2 text-text-color">Senden</button></form></div>`}`;
});
export {
  Page as default
};
