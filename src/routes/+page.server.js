import { getBooks } from "$lib/server/services";

/** @type {import('./$types').PageLoad} */
export const load = () => {
    const books = getBooks();

    return { books };
}