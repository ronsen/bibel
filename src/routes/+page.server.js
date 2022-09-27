import Books from "$lib/books.json";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    let oldBooks = Books.filter((book) => book.category_id == 1);
    let newBooks = Books.filter((book) => book.category_id == 2);

    return { oldBooks, newBooks };
}