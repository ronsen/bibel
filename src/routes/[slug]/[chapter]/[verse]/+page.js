import Books from "$lib/books.json";
import Chapters from "$lib/chapters.json";
import Verses from "$lib/verses.json";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    let book = Books.find((b) => b.slug == params.slug);
    let chapter = Chapters.find((c) => c.book_id == book.id && c.number == params.chapter);
    let verse = Verses.find((verse) => verse.chapter_id == chapter.id && verse.number == params.verse);

    return { book, chapter, verse };
}