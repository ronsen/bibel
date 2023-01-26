import fs from "fs";
import { cache } from '$lib/server/cache';

/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
    let booksJson = cache.has('BOOKS') ?
        cache.get('BOOKS') :
        JSON.parse(fs.readFileSync('./src/lib/books.json'));

    let book = booksJson.find((b) => b.abbr == params.slug);

    let versesJson = cache.has('VERSES') ?
        cache.get('VERSES') :
        JSON.parse(fs.readFileSync('./src/lib/verses.json'));

    let verses = versesJson.filter((verse) => verse.book_id == book.id
        && verse.chapter == params.chapter);

    return { book, chapter: params.chapter, verses };
}