import { getBooks } from "$lib/server/services";

/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
    const booksObj = getBooks();
    const book = booksObj.find((b) => b.abbr == params.slug);

    return { book };
}