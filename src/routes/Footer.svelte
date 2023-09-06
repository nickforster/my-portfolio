<script>
    import Fa from "svelte-fa";
    import { faGithub, faInstagram, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
    import Referencelink from "./Referencelink.svelte";
</script>

<footer class="relative mt-10 animate-fadein">
    <div class="flex flex-row-reverse sm:fixed items-center justify-center gap-10 origin-bottom-left sm:-rotate-90 left-14 bottom-0 h-4">
        <div class="text-text-color flex flex-row sm:flex-row-reverse gap-7 items-center justify-center">
            <Referencelink url={"https://github.com/nickforster"} icon={faGithub} text={"GitHub"} />
            <Referencelink url={"https://instagram.com/nickforster9"} icon={faInstagram} text={"Instagram"} />
            <Referencelink url={"https://www.facebook.com/profile.php?id=100092615655497"} icon={faFacebookF} text={"Facebook"} />
            <Referencelink url={"https://www.linkedin.com/in/nick-forster-6689a1248/"} icon={faLinkedinIn} text={"Linkedin"} />
            <a href="mailto:hello@nickforster.ch" target="_blank" class="sm:hidden">
                <Fa icon={faEnvelope} class="scale-125" />
            </a>
            <span class="hidden sm:block w-32 h-0.5 bg-text-color rounded" />
        </div>
    </div>

    <div class="hidden sm:flex flex-row fixed items-center text-text-color gap-10 origin-bottom-right right-14 bottom-0 rotate-90">
        <a href="mailto:hello@nickforster.ch" class="text-l hover:text-secondary-color transition-colors duration-300">hello@nickforster.ch </a>
        <span class="block w-20 h-0.5 bg-text-color rounded translate-y-1/2" />
    </div>

    <div class="relative bottom-0 flex justify-center w-full py-2 text-text-color mt-4">
        <span class="absolute top-1 block w-72 h-0.5 bg-text-color rounded" />
        <p>Developed by Nick Forster</p>
    </div>
</footer>
