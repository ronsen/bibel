import fs from "fs";
import { cache } from '$lib/server/cache';

/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
    let booksJson;
    
    if (cache.has('BOOKS')) {
        booksJson = cache.get('BOOKS');
    } else {
        booksJson = JSON.parse(fs.readFileSync('./src/lib/books.json'));
        cache.set('BOOKS', booksJson);
    }

    const book = booksJson.find((b) => b.abbr == params.slug);

    let versesJson;
    
    if (cache.has('VERSES')) {
        versesJson = cache.get('VERSES');
    } else {
        versesJson = JSON.parse(fs.readFileSync('./src/lib/verses.json'));
        cache.set('VERSES', versesJson);
    }

    const verses = versesJson.filter((verse) => verse.book_id == book.id
        && verse.chapter == params.chapter);

    return { book, chapter: params.chapter, verses };
}