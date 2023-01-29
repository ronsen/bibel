import { getBooks, getVerses } from "$lib/server/services";

/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
    const booksObj = getBooks();
    const book = booksObj.find((b) => b.abbr == params.slug);

    const versesObj = getVerses();
    const verse = versesObj.find((verse) => verse.book_id == book.id
        && verse.chapter == params.chapter
        && verse.number == params.verse);

    return { book, chapter: params.chapter, verse };
}