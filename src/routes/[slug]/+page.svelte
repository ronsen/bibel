<script>
    /** @type {import('./$types').PageData} */
    export let data;
    const { book } = data;
</script>

<svelte:head>
    <title>{book.name}</title>
</svelte:head>

<div class="border-b mb-3 pb-3 font-bold">
    {book.name}
</div>

<div class="grid grid-cols-4 gap-4">
    {#each Array(book.number_of_chapters) as _, i}
        <div class="text-center border-b pb-2 mb-2">
            <a href="/{data.book.abbr}/{i + 1}">{i + 1}</a>
        </div>
    {/each}
</div>