<script>
    //@ts-nocheck
    import css from "$lib/icons/css.svg?raw";
    import html from "$lib/icons/html.svg?raw";
    import javaScript from "$lib/icons/javascript.svg?raw";
    import typeScript from "$lib/icons/typescript.svg?raw";
    import angular from "$lib/icons/angular.svg?raw";
    import svelte from "$lib/icons/svelte.svg?raw";

    import java from "$lib/icons/java.svg?raw";
    import nodejs from "$lib/icons/nodejs.svg?raw";
    import go from "$lib/icons/go.svg?raw";
    import php from "$lib/icons/php.svg?raw";
    import mysql from "$lib/icons/mysql.svg?raw";
    import bash from "$lib/icons/bash.svg?raw";

    import github from "$lib/icons/github.svg?raw";
    import figma from "$lib/icons/figma.svg?raw";
    import postman from "$lib/icons/postman.svg?raw";
    import vscode from "$lib/icons/vscode.svg?raw";
    import jetbrains from "$lib/icons/jetbrains.svg?raw";
    import notion from "$lib/icons/notion.svg?raw";

    import Tech from "./Tech.svelte";
    import Saos from "saos";
</script>

<div>
    <h1 class="text-5xl md:text-6xl lg:text-8xl text-secondary-color opacity-100 mb-16 animate-dropin">Tech I use</h1>

    <Saos animation={"from-left 500ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both"} once={true}>
        <div class="bg-primary-accent-color p-8 rounded mb-8">
            <h2 class="text-3xl md:text-4xl lg:text-5xl text-text-color">For client-side applications</h2>
            <div class="grid grid-flow-col grid-rows-2  md:grid-rows-1 justify-between mt-6">
                <Tech name="CSS" icon={css} color="#2495EF" />
                <Tech name="HTML" icon={html} color="#E34D27" />
                <Tech name="JavaScript" icon={javaScript} color="#FFDF00" />
                <Tech name="TypeScript" icon={typeScript} color="#3178C6" />
                <Tech name="Angular" icon={angular} color="#DD0031" />
                <Tech name="Svelte" icon={svelte} color="#FF3E00" />
            </div>
        </div>
    </Saos>

    <Saos 
    animation={"from-right 500ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both"} once={true}>
        <div class="bg-primary-accent-color p-8 rounded mb-8">
            <h2 class="text-3xl mg:text-4xl lg:text-5xl text-text-color">For backend applications</h2>
            <div class="grid grid-flow-col grid-rows-2  md:grid-rows-1 justify-between mt-6">
                <Tech name="Java" icon={java} color="#6A8DA6" />
                <Tech name="Node.js" icon={nodejs} color="#80C046" />
                <Tech name="GoLang" icon={go} color="#00ACD7" />
                <Tech name="PHP" icon={php} color="#8993BE" />
                <Tech name="MySQL" icon={mysql} color="#799FBC" />
                <Tech name="Bash" icon={bash} color="#17DA3E" />
            </div>
        </div>
    </Saos>

    <Saos animation={"from-left 500ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both"} once={true}>
        <div class="bg-primary-accent-color p-8 rounded mb-8">
            <h2 class="text-3xl md:text-4xl lg:text-5xl text-text-color">The tools I use</h2>
            <div class="grid grid-flow-col grid-rows-2  md:grid-rows-1 justify-between mt-6">
                <Tech name="GitHub" icon={github} color="#636363" />
                <Tech name="Figma" icon={figma} color="#636363" />
                <Tech name="Postman" icon={postman} color="#FD6C35" />
                <Tech name="VSCode" icon={vscode} color="#33A8F2" />
                <Tech name="JetBrains" icon={jetbrains} color="#636363" />
                <Tech name="Notion" icon={notion} color="#636363" />
            </div>
        </div>
    </Saos>
</div>

<style>
    @keyframes -global-from-left {
        0% {
            transform: rotateX(50deg) translateX(-100vw) skewX(-50deg);
            opacity: 0;
        }
        100% {
            transform: rotateX(0deg) translateX(0) skewX(0deg);
            opacity: 1;
        }
    }

    @keyframes -global-from-right {
        0% {
            transform: rotateX(-50deg) translateX(100vw) skewX(50deg);
            opacity: 0;
        }
        100% {
            transform: rotateX(0deg) translateX(0) skewX(0deg);
            opacity: 1;
        }
    }
</style>
