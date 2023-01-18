# Bibel

Alkitab bahasa Batak Toba.

Clone this project and run these following commands to try locally:

```bash
cd bibel
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Docker

Run these following commands to create a Docker container:

```bash
docker build --tag bibel:1.0 .
docker container create --name bibel -p 3000:3000 bibel:1.0
docker container start bibel
```

Open `http://localhost:3000` in your browser.

*Note: this is just a fun project!*