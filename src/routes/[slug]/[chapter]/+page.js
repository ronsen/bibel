import Books from "$lib/books.json";
import Chapters from "$lib/chapters.json";
import Verses from "$lib/verses.json";

/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
    let book = Books.find((b) => b.slug == params.slug);
    let chapter = Chapters.find((c) => c.book_id == book.id && c.number == params.chapter);
    let verses = Verses.filter((verse) => verse.chapter_id == chapter.id);

    return { book, chapter, verses };
}