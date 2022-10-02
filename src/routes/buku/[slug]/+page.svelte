<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.book.name}</title>
</svelte:head>

<div class="border-b mb-3 pb-3 font-bold">
    {data.book.name}
</div>

<div class="w-full lg:w-3/5 mx-auto">
    <div class="grid grid-cols-4 gap-4">
        {#each data.chapters as chapter}
            <div class="text-center border-b pb-2 mb-2">
                <a href="/buku/{data.book.slug}/{chapter.number}"
                    >{chapter.number}</a
                >
            </div>
        {/each}
    </div>
</div>
