import fs from "fs";
import { cache } from "./cache";

export const getBooks = () => {
    let books;
    
    if (cache.has('BOOKS')) {
        books = cache.get('BOOKS');
    } else {
        books = JSON.parse(fs.readFileSync('./src/lib/books.json'));
        cache.set('BOOKS', books);
    }

    return books;
}

export const getVerses = () => {
    let verses;
    
    if (cache.has('VERSES')) {
        verses = cache.get('VERSES');
    } else {
        verses = JSON.parse(fs.readFileSync('./src/lib/verses.json'));
        cache.set('VERSES', verses);
    }

    return verses;
}