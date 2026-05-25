# Zadanie 3

## Prompt 1 - niestrukturyzowany

```text
dockerfile node
```

## Odpowiedz 1

Przykladowy `Dockerfile` dla aplikacji Node.js:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Typowy `.dockerignore`:

```gitignore
node_modules
npm-debug.log
.git
.env
```

Budowanie i uruchomienie:

```bash
docker build -t moja-aplikacja-node .
docker run -p 3000:3000 moja-aplikacja-node
```

## Prompt 2 - strukturyzowany

```text
Napisz prosty Dockerfile dla aplikacji Node.js, ktory:
- uzywa Node 18 jako obrazu bazowego
- kopiuje pliki package.json i package-lock.json
- instaluje zaleznosci
- kopiuje reszte plikow aplikacji
- wystawia port 3000
- uruchamia aplikacje poleceniem "npm start"
```

## Odpowiedz 2

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Ten Dockerfile uzywa obrazu Node.js w wersji 18, ustawia katalog roboczy `/app`, kopiuje pliki zaleznosci, instaluje pakiety, kopiuje pozostale pliki aplikacji, wystawia port `3000` i uruchamia aplikacje przez `npm start`.

## Porownanie i wnioski

Pierwszy prompt byl bardzo krotki i ogolny, dlatego odpowiedz byla bardziej domyslna. Asystent sam wybral wersje Node.js `20-alpine`, uzyl bardziej ogolnego zapisu `package*.json`, dodal przyklad `.dockerignore` oraz komendy budowania i uruchamiania obrazu.

Drugi prompt byl bardziej szczegolowy i zawieral konkretne wymagania. Odpowiedz lepiej trzymala sie oczekiwan: uzyla Node 18, jawnie skopiowala `package.json` i `package-lock.json`, wystawila port `3000` oraz ustawila uruchomienie przez `npm start`.

Wniosek: strukturyzowany prompt daje bardziej przewidywalna i dopasowana odpowiedz. Im dokladniej opisane sa wymagania, tym mniejsza szansa, ze asystent wybierze inne domyslne rozwiazania niz te oczekiwane w zadaniu.
