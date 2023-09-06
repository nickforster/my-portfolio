<script>
    import logo from "$lib/images/logo.png";

    let y = 0;
    let menuShowing = false;

    function showMenu() {
        if (!menuShowing) {
            document.getElementById("span1")?.classList.add("-rotate-45", "translate-y-3");
            document.getElementById("span2")?.classList.replace("w-8", "w-0");
            document.getElementById("span3")?.classList.remove("w-6");
            document.getElementById("span3")?.classList.add("rotate-45", "-translate-y-3", "w-10");

            document.getElementsByTagName("main")[0].classList.add("blur", "z-0", "transition-all", "duration-300");

            document.body.style.overflow = "hidden";

            document.getElementById("nav")?.classList.remove("translate-x-full");
            menuShowing = true
        } else {
            hideMenu()
        }
    }

    function hideMenu() {
        document.getElementById("span1")?.classList.remove("-rotate-45", "translate-y-3");
            document.getElementById("span2")?.classList.replace("w-0", "w-8");
            document.getElementById("span3")?.classList.remove("rotate-45", "-translate-y-3", "w-10");
            document.getElementById("span3")?.classList.add("w-6");

            document.getElementsByTagName("main")[0].classList.remove("blur", "z-0");

            document.body.style.overflow = "auto";

            document.getElementById("nav")?.classList.add("translate-x-full");
            menuShowing = false
    }

    function scrolled() {
        if (scrollY > y && y >= 50) {
            // scrolling down
            document.getElementById("header")?.classList.add("-translate-y-full");
        } else {
            // scrolling up
            document.getElementById("header")?.classList.remove("-translate-y-full");
        }
    }
</script>

<header>
    <div class="fixed w-full flex flex-row justify-between sm:justify-start px-5 py-3 gap-12 z-10 transition-all duration-300 animate-dropin" id="header">
        <a href="/">
            <img src={logo} alt="SvelteKit" class="h-8" />
        </a>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="flex flex-col items-end gap-2 sm:hidden z-50" on:click={showMenu}>
            <span class="block w-10 h-1 bg-text-color rounded transition-all duration-300" id="span1" />
            <span class="block w-8 h-1 bg-text-color rounded transition-all duration-300" id="span2" />
            <span class="block w-6 h-1 bg-text-color rounded transition-all duration-300" id="span3" />
        </div>

        <div class="text-text-color text-right fixed right-0 h-full w-3/4 top-0 p-8 pt-16 text-2xl z-20 shadow-xl translate-x-full transition-all duration-300 sm:translate-x-0 sm:static sm:shadow-none sm:p-0 bg-primary-color sm:bg-transparent" id="nav">
            <ul class="flex flex-col justify-evenly items-center h-full sm:flex-row">
                <li>
                    <a href="/projects" on:click={hideMenu} class="hover:text-secondary-color transition-colors duration-300">Projects</a>
                </li>
                <li>
                    <a href="/tech" on:click={hideMenu} class="hover:text-secondary-color transition-colors duration-300">Tech</a>
                </li>
                <li>
                    <a href="/contact" on:click={hideMenu} class="hover:text-secondary-color transition-colors duration-300">Contact</a>
                </li>
                <li>
                    <a href="/blog" on:click={hideMenu} class="hover:text-secondary-color transition-colors duration-300">Intern</a>
                </li>
            </ul>
        </div>
    </div>
</header>

<svelte:window on:scroll={scrolled} bind:scrollY={y} />
