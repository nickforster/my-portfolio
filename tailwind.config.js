import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                "primary-color": "var(--primary-color)",
                "primary-accent-color": "var(--primary-accent-color)",
                "secondary-color": "var(--secondary-color)",
                "text-color": "var(--text-color)",
            },
            boxShadow: {
                full: { "box-shadow": "0px 0px 15px 5px #000000" },
            },
            keyframes: {
                dropin: {
                    "0%": { opacity: "0", transform: "translateY(-100%)" },
                    "100%": { opacity: "1", transform: "translateY(0px)" },
                },
                fadein: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                polygon2: {
                    "0%": { opacity: "0", right: "-8rem", top: "-6.25rem", transform: "rotate(0deg)" },
                    "100%": { opacity: "1", right: "-6rem", top: "-6rem", transform: "rotate(-6deg)" },
                },
                polygon3: {
                    "0%": { opacity: "0", right: "-8rem", top: "-6.25rem", transform: "rotate(0deg)" },
                    "100%": { opacity: "1", right: "-4rem", top: "-5rem", transform: "rotate(-12deg)" },
                },
                polygon4: {
                    "0%": { opacity: "0", right: "-8rem", top: "-6.25rem", transform: "rotate(0deg)" },
                    "100%": { opacity: "1", right: "-2rem", top: "-4rem", transform: "rotate(-18deg)" },
                },
                polygon5: {
                    "0%": { opacity: "0", right: "-8rem", top: "-6.25rem", transform: "rotate(0deg)" },
                    "100%": { opacity: "1", right: "-0rem", top: "-3rem", transform: "rotate(-24deg)" },
                },
            },
            animation: {
                dropin: "dropin 1s ease 0ms backwards",
                fadein: "fadein 2s ease 0ms",
                polygon2: "polygon2 1s ease 0ms",
                polygon3: "polygon3 1s ease 0ms",
                polygon4: "polygon4 1s ease 0ms",
                polygon5: "polygon5 1s ease 0ms",
            },
        },
    },

    plugins: [],
};
