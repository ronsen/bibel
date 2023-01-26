import NodeCache from "node-cache";

const cache = global.cache || new NodeCache({ stdTTL: 60 * 60 * 24 });

if (process.env.NODE_ENV === 'development') {
    global.cache = cache;
}

export { cache };