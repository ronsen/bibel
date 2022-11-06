import Books from "$lib/books.json";

/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
    let book = Books.find((b) => b.abbr == params.slug);

    return { book };
}