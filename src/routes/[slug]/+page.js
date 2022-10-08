import Books from "$lib/books.json";
import Chapters from "$lib/chapters.json";

/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
    let book = Books.find((b) => b.slug == params.slug);
    let chapters = Chapters.filter((chapter) => chapter.book_id == book.id);

    return { book, chapters };
}