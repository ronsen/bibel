import { getBooks, getVerses } from "$lib/server/services";

/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
    const booksObj = getBooks();
    const book = booksObj.find((b) => b.abbr == params.slug);

    const versesObj = getVerses();
    const verses = versesObj.filter((verse) => verse.book_id == book.id
        && verse.chapter == params.chapter);

    return { book, chapter: params.chapter, verses };
}