<script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.339/build/spline-viewer.js">
    import Project from "./Project.svelte";
    import Saos from "saos";
</script>

<div class="mb-16">
    <h1 class="text-4xl md:text-6xl lg:text-8xl text-secondary-color mb-16 animate-dropin">Projects</h1>
    
    <Saos animation={"from-left 500ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both"} once={true}>
        <Project number="01" title="Games website" imgPath="/" alt="Games website screenshot" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsa, unde rerum doloribus ipsam pariatur consequatur sed dolore, quam nesciunt dolorum ut vel illo dolor cumque debitis repudiandae, harum voluptates." />
    </Saos>
    <Saos animation={"from-right 500ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both"} once={true}>
        <Project number="02" title="Games website" imgPath="/" alt="Games website screenshot" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsa, unde rerum doloribus ipsam pariatur consequatur sed dolore, quam nesciunt dolorum ut vel illo dolor cumque debitis repudiandae, harum voluptates." />
    </Saos>
    <Saos animation={"from-left 500ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both"} once={true}>
        <Project number="03" title="Games website" imgPath="/" alt="Games website screenshot" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsa, unde rerum doloribus ipsam pariatur consequatur sed dolore, quam nesciunt dolorum ut vel illo dolor cumque debitis repudiandae, harum voluptates." />
    </Saos>
</div>
