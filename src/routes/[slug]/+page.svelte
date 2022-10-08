<script>
    /** @type {import('./$types').PageData} */
    export let data;
    const { book, chapters } = data;
</script>

<svelte:head>
    <title>{book.name}</title>
</svelte:head>

<div class="border-b mb-3 pb-3 font-bold">
    {book.name}
</div>

<div class="grid grid-cols-4 gap-4">
    {#each chapters as chapter}
        <div class="text-center border-b pb-2 mb-2">
            <a href="/{data.book.slug}/{chapter.number}"
                >{chapter.number}</a
            >
        </div>
    {/each}
</div>