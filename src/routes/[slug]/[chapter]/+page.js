import Books from "$lib/books.json";
import Verses from "$lib/verses.json";

/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
    let book = Books.find((b) => b.abbr == params.slug);
    let verses = Verses.filter((verse) => verse.book_id == book.id
        && verse.chapter == params.chapter);

    return { book, chapter: params.chapter, verses };
}