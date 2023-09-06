<script>
    import { onMount } from "svelte";
    // @ts-ignore
    import * as THREE from "three";
    // @ts-ignore
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

    onMount(() => {
        // Set up three.js scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        const container = document.getElementById("container");

        function resizeRendererToParent() {
            if (container == null) return 
            const width = container.clientWidth;
            const height = container.clientHeight;

            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }

        resizeRendererToParent();

        container?.appendChild(renderer.domElement);

        window.addEventListener("resize", resizeRendererToParent);

        // console.log(container);
        // renderer.setSize(container?.clientWidth, container?.clientHeight);
        // container?.appendChild(renderer.domElement);

        // renderer.setSize(window.innerWidth, window.innerHeight);
        // document.getElementById("container")?.appendChild(renderer.domElement);

        const textureLoader = new THREE.TextureLoader();
        const earthTexture = textureLoader.load("earth-texture.jpg");

        // Create the globe geometry and material
        const geometry = new THREE.SphereGeometry(5, 64, 32);
        const material = new THREE.MeshStandardMaterial({ map: earthTexture });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        // Position the camera
        camera.position.z = 10;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
        scene.add(directionalLight);

        // controls 
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.minDistance = 5.1
        controls.enablePan = false

        // Create an animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            globe.rotation.x += 0.002;
            globe.rotation.y += 0.002;
            renderer.render(scene, camera);

            controls.update();
        };

        animate();
    });
</script>

<div id="container" class="h-96 min-h-full w-full absolute top-0 left-0"/>

<style>
    /* You can add any custom styling for your globe here */
</style>
