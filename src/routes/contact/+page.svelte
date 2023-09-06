<script>
    import Globe from "./Globe.svelte";
    import europe from "$lib/images/europe.svg";
</script>

<div>
    <h1 class="text-5xl md:text-6xl lg:text-8xl text-secondary-color opacity-100 mb-16 animate-dropin">Contact</h1>
    <!-- <Globe /> -->

    <!-- <form class="flex flex-col gap-4">
        <div class="w-full flex gap-4">
            <input type="text" id="name" class="w-full h-12 bg-primary-accent-color p-4 text-secondary-color outline-none placeholder:text-secondary-color placeholder:opacity-60 border-2 border-transparent border-b-secondary-color focus:border-secondary-color valid:border-secondary-color transition-all duration-300" placeholder="Name" required>
            <input type="email" id="email" class="w-full h-12 bg-primary-accent-color p-4 text-secondary-color outline-none placeholder:text-secondary-color placeholder:opacity-60 border-2 border-transparent border-b-secondary-color focus:border-secondary-color valid:border-secondary-color transition-all duration-300" placeholder="Email" required>
        </div>
        <input type="text" id="subject" class="w-full h-12 bg-primary-accent-color p-4 text-secondary-color outline-none placeholder:text-secondary-color placeholder:opacity-60 border-2 border-transparent border-b-secondary-color focus:border-secondary-color valid:border-secondary-color transition-all duration-300" placeholder="Subject" required>
        <textarea id="message" class="w-full h-36 min-h-min bg-primary-accent-color p-4 text-secondary-color outline-none placeholder:text-secondary-color placeholder:opacity-60 border-2 border-transparent border-b-secondary-color focus:border-secondary-color valid:border-secondary-color transition-all duration-300" placeholder="Message" required></textarea>

        <div class="w-full flex gap-4">
            <button type="reset" id="reset" class="w-24 bg-primary-accent-color p-2 text-secondary-color border-2 border-transparent outline-none border-b-secondary-color focus:border-secondary-color hover:border-secondary-color transition-all duration-300">Cancel</button>
            <button type="submit" id="submit" class="w-24 bg-primary-accent-color p-2 text-secondary-color border-2 border-transparent outline-none border-b-secondary-color focus:border-secondary-color hover:border-secondary-color transition-all duration-300">Send</button>
        </div>
    </form> -->

    <form class="flex flex-col md:flex-row gap-4">
        <div class="flex flex-col gap-4 w-full justify-between">
            <input type="text" id="name" class="w-full h-12 bg-primary-accent-color p-4 text-secondary-color outline-none placeholder:text-secondary-color placeholder:opacity-60 border-2 border-transparent border-b-secondary-color focus:border-secondary-color valid:border-secondary-color transition-all duration-300" placeholder="Name" required />


            <div class="h-full relative hidden md:block">
                <img src={europe} alt="Map of Europe" class="absolute max-h-full w-full object-cover object-bottom" />
            </div>
        </div>
        <div class="flex flex-col gap-4 w-full">
            <input type="email" id="email" class="w-full h-12 bg-primary-accent-color p-4 text-secondary-color outline-none placeholder:text-secondary-color placeholder:opacity-60 border-2 border-transparent border-b-secondary-color focus:border-secondary-color valid:border-secondary-color transition-all duration-300" placeholder="Email" required />
            <input type="text" id="subject" class="w-full h-12 bg-primary-accent-color p-4 text-secondary-color outline-none placeholder:text-secondary-color placeholder:opacity-60 border-2 border-transparent border-b-secondary-color focus:border-secondary-color valid:border-secondary-color transition-all duration-300" placeholder="Subject" required />
            <textarea id="message" class="w-full h-36 min-h-min bg-primary-accent-color p-4 text-secondary-color outline-none placeholder:text-secondary-color placeholder:opacity-60 border-2 border-transparent border-b-secondary-color focus:border-secondary-color valid:border-secondary-color transition-all duration-300" placeholder="Message" required />

            <div class="w-full flex gap-4">
                <button type="reset" id="reset" class="w-full bg-primary-accent-color p-2 text-secondary-color border-2 border-transparent outline-none border-b-secondary-color focus:border-secondary-color hover:border-secondary-color transition-all duration-300">Cancel</button>
                <!-- TODO send mail -->
                <button type="submit" id="reset" class="w-full bg-primary-accent-color p-2 text-secondary-color border-2 border-transparent outline-none border-b-secondary-color focus:border-secondary-color hover:border-secondary-color transition-all duration-300">Send</button>
            </div>
        </div>
    </form>
</div>
