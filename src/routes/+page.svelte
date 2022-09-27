<script>
    import Books from "$lib/books.json";
</script>

<svelte:head>
    <title>Bibel - Alkitab bahasa Batak Toba</title>
</svelte:head>

{#each Books as book}
    <div class="flex justify-between mb-3">
        <a href="/buku/{book.slug}">{book.name}</a>
        {book.number_of_chapters}
    </div>
{/each}