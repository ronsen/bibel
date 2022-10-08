<script>
    /** @type {import('./$types').PageData} */
    export let data;
    const { book, chapter, verses } = data;
</script>

<svelte:head>
    <title>{book.name} {chapter.number}</title>
</svelte:head>

<div class="border-b mb-3 pb-3 font-bold">
    <a href="/{book.slug}">{book.name}</a>
    {chapter.number}
</div>

<article class="verses">
    {#each verses as verse}
        <div class="mb-2">
            <sup class="text-xs">{verse.number}</sup>
            <a href="/{book.slug}/{chapter.number}/{verse.number}">{verse.content}</a>
        </div>
    {/each}
</article>
