<script>
    import books from "$lib/books.json";
</script>

<svelte:head>
    <title>Bibel - Alkitab bahasa Batak Toba</title>
    <meta name="description" content="Alkitab bahasa Batak Toba.">
</svelte:head>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
        <h3 class="font-bold border-b pb-2 mb-2">Padan Na Robi</h3>
        {#each books as book}
            {#if book.category_id == 1}
            <div class="flex justify-between border-b pb-2 mb-2">
                <a href="/{book.abbr}">{book.name}</a>
                {book.number_of_chapters}
            </div>
            {/if}
        {/each}
    </div>

    <div>
        <h3 class="font-bold border-b pb-2 mb-2">Padan Na Imbaru</h3>
        {#each books as book}
            {#if book.category_id == 2}
            <div class="flex justify-between border-b pb-2 mb-2">
                <a href="/{book.abbr}">{book.name}</a>
                {book.number_of_chapters}
            </div>
            {/if}
        {/each}
    </div>
</div>