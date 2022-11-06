import Books from "$lib/books.json";
import Verses from "$lib/verses.json";

/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
    let book = Books.find((b) => b.abbr == params.slug);
    let verse = Verses.find((verse) => verse.book_id == book.id
        && verse.chapter == params.chapter
        && verse.number == params.verse);

    return { book, chapter: params.chapter, verse };
}