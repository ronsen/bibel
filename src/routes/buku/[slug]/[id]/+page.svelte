<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.book.name} {data.chapter.number}</title>
</svelte:head>

<div class="border-b mb-3 pb-3 font-bold">
    <a href="/buku/{data.book.slug}">{data.book.name}</a>
    {data.chapter.number}
</div>

<div class="w-full lg:w-3/5 mx-auto">
    <article class="verses">
        {#each data.verses as verse}
            <div class="mb-2">
                <sup class="text-xs">{verse.number}</sup>
                {verse.content}
            </div>
        {/each}
    </article>
</div>
