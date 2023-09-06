<!-- <script>
    import Element from "./Element.svelte";

    let password = prompt("Bitte das Passwort eingeben: ")

    if (password === "hello") {
        console.log("success");
    } else {
        console.log("error");
    }

    let allImages = [
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        {
            text: "Buenos Aires in der Nacht vom Flieger",
            src: "arg/buenos-aires-nacht.jpeg",
        },
        {
            text: "Meine erste Gastfamilie und die Counselor von Rotary",
            src: "arg/gastfamilie.jpg",
        },
        {
            text: "Buenos Aires in der Nacht vom Flieger",
            src: "arg/buenos-aires-nacht.jpeg",
        },
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        {
            text: "Meine erste Gastfamilie und die Counselor von Rotary",
            src: "arg/gastfamilie.jpg",
        },
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        {
            text: "Buenos Aires in der Nacht vom Flieger",
            src: "arg/buenos-aires-nacht.jpeg",
        },
        {
            text: "Meine erste Gastfamilie und die Counselor von Rotary",
            src: "arg/gastfamilie.jpg",
        },
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        {
            text: "Buenos Aires in der Nacht vom Flieger",
            src: "arg/buenos-aires-nacht.jpeg",
        },
        {
            text: "Meine erste Gastfamilie und die Counselor von Rotary",
            src: "arg/gastfamilie.jpg",
        },
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        {
            text: "Buenos Aires in der Nacht vom Flieger",
            src: "arg/buenos-aires-nacht.jpeg",
        },
        {
            text: "Meine erste Gastfamilie und die Counselor von Rotary",
            src: "arg/gastfamilie.jpg",
        },
    ];

    let images = [[], [], []];

    for (let i = 0; i < allImages.length; i++) {
        // @ts-ignore
        images[i % 3].push(allImages[i]);
    }
</script>

<div class="mb-16">
    <h1 class="text-4xl md:text-6xl lg:text-8xl text-secondary-color mb-16 animate-dropin">Argentina 23/24</h1>

    <div class="grid grid-cols-3">
        <div>
            {#each images[0] as image}
                <Element {image} />
            {/each}
        </div>
        <div>
            {#each images[1] as image}
                <Element {image} />
            {/each}
        </div>
        <div>
            {#each images[2] as image}
                <Element {image} />
            {/each}
        </div>
    </div>
</div> -->

<script>
// @ts-nocheck

    import Element from "./Element.svelte";

    let password = "";
    let showContent = false;

    function checkPassword() {
        if (password === "hello") {
            console.log("Success");
            showContent = true;
        } else {
            console.log("Error");
            showContent = false;
        }
    }

    let allImages = [
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        {
            text: "Buenos Aires in der Nacht vom Flieger",
            src: "arg/buenos-aires-nacht.jpeg",
        },
        {
            text: "Meine erste Gastfamilie und die Counselor von Rotary",
            src: "arg/gastfamilie.jpg",
        },
        {
            text: "Buenos Aires in der Nacht vom Flieger",
            src: "arg/buenos-aires-nacht.jpeg",
        },
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        {
            text: "Meine erste Gastfamilie und die Counselor von Rotary",
            src: "arg/gastfamilie.jpg",
        },
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        {
            text: "Buenos Aires in der Nacht vom Flieger",
            src: "arg/buenos-aires-nacht.jpeg",
        },
        {
            text: "Meine erste Gastfamilie und die Counselor von Rotary",
            src: "arg/gastfamilie.jpg",
        },
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        {
            text: "Buenos Aires in der Nacht vom Flieger",
            src: "arg/buenos-aires-nacht.jpeg",
        },
        {
            text: "Meine erste Gastfamilie und die Counselor von Rotary",
            src: "arg/gastfamilie.jpg",
        },
        {
            text: "Vor dem Abflug in Zürich",
            src: "arg/abflug.jpg",
        },
        {
            text: "Buenos Aires in der Nacht vom Flieger",
            src: "arg/buenos-aires-nacht.jpeg",
        },
        {
            text: "Meine erste Gastfamilie und die Counselor von Rotary",
            src: "arg/gastfamilie.jpg",
        },
    ];
    
    let images = [[], [], []];

    for (let i = 0; i < allImages.length; i++) {
        images[i % 3].push(allImages[i]);
    }
</script>

{#if showContent}
    {#each images as row, i}
        <div class="row" key={i}>
            {#each row as image, j}
                <Element {image} key={j} />
            {/each}
        </div>
    {/each}
{:else}
    <div>
        <input type="password" bind:value={password} />
        <button on:click={checkPassword}>Submit</button>
    </div>
{/if}
