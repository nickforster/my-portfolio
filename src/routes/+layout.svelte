<script>
    // @ts-nocheck
    import cursorPolygon from "$lib/images/cursor-polygon.svg";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import Projects from "./projects/+page.svelte";
    import Tech from "./tech/+page.svelte";
    import "../app.css";
    import Fa from "svelte-fa";
    import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

    /**
     * @param {number} x
     * @param {number} y
     */
    function handleMousemove(x, y, interactable) {
        const cursor = document.getElementById("cursor");
        x -= cursor.offsetWidth / 2 - 4;
        y -= cursor.offsetHeight / 2 - 4;

        const keyframes = {
            transform: `translate(${x}px, ${y}px) scale(${interactable !== null ? 3 : 1})`,
        };

        cursor.animate(keyframes, {
            duration: 600,
            fill: "forwards",
        });

        cursor.classList.add("md:group-hover/cursor:opacity-25");
    }
</script>

<div class="app group/cursor" on:mousemove={(e) => handleMousemove(e.clientX, e.clientY, e.target.closest("a"))}>
    <Header />

    <main class="py-16 px-8 sm:px-24 overflow-x-hidden"><slot /></main>

    <Footer />

    <div class="fixed top-0 left-0 h-5 w-5 rounded-full bg-text-color pointer-events-none opacity-0 grid place-items-center cursors" id="cursor" />
</div>
