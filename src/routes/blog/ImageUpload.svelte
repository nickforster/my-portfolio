<script>
    // @ts-nocheck

    let imageFile;
    let text = "";

    async function uploadImage() {
        const formData = new FormData();
        formData.append("image", imageFile);
        formData.append("text", text);

        console.log(formData);

        try {
            const response = await fetch("https://nickforster.ch/api.php", {
                method: "POST",
                body: formData,
            });

            console.log(response);

            const data = await response.json();
            console.log(data); // Handle response from the server
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    }
</script>

<div>
    <form on:submit|preventDefault={uploadImage}>
        <input type="file" bind:files={imageFile} accept="image/*" />
        <input type="text" bind:value={text} placeholder="Enter text..." />
        <button type="submit">Upload Image</button>
    </form>
</div>
