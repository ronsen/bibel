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

    return { book };
}