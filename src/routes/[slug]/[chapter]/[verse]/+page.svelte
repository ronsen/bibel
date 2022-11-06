<script>
    /** @type {import('./$types').PageData} */
    export let data;
    const { book, chapter, verse } = data;
</script>

<svelte:head>
    <title>{book.name} {chapter} : {verse.number}</title>
</svelte:head>

<div class="border-b mb-3 pb-3 font-bold">
    <a href="/{book.abbr}">{book.name}</a>
    <a href="/{book.abbr}/{chapter}">{chapter}</a>
    <span>:</span>
    {verse.number}
</div>

<article class="verse text-2xl">
    {verse.content}
</article>