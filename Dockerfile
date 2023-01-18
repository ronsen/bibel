FROM node:slim

COPY . .

RUN npm install
RUN npm run build

CMD ["node", "build/index.js"]
