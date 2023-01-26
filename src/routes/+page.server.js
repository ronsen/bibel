import fs from "fs";
import { cache } from '$lib/server/cache';

/** @type {import('./$types').PageLoad} */
export const load = () => {
    if (cache.has('BOOKS')) {
        const books = cache.get('BOOKS');

        return { books };
    }

    const books = JSON.parse(fs.readFileSync('./src/lib/books.json'));
    cache.set('BOOKS', books);

    return { books };
}