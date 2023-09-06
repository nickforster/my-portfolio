<script>
    // @ts-nocheck

    import Element from "./Element.svelte";

    let password = "";
    let showContent = false;
    let status = null;

    async function makeRequest() {
    const response = await fetch("https://www.nickforster.ch/api.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: password }),
    });

    const data = await response.json();
    status = data.result;
    console.log(status, data);
  }

    function checkPassword() {
        makeRequest().then( () => {
            console.log(status);
        })

        console.log(status);
        // if (password === "hello") {
        //     console.log("Success");
        //     showContent = true;
        // } else {
        //     console.log("Error");
        //     alert("falsches paswort")
        //     showContent = false;
        // }
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
    </div>
{:else}
    <div>
        <h1 class="text-4xl md:text-6xl lg:text-8xl text-secondary-color mb-16 animate-dropin text-center mt-16">Login</h1>
        <form class="flex flex-col gap-4 content-center flex-wrap mb-16" on:submit={checkPassword}>
            <input type="password" placeholder="Passwort" bind:value={password} class="border-secondary-color bg-primary-color placeholder:text-text-color placeholder:text-center border-2 rounded p-2 text-text-color text-center" />
            <button type="submit" class="border-secondary-color hover:bg-secondary-color hover:text-black transition-colors duration-300 border-2 rounded p-2 text-text-color">Senden</button>
        </form>
    </div>
{/if}
