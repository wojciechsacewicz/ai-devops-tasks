# Zadanie 11

## Funkcja `sum`

Plik `sum.js`:

```javascript
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

## Test jednostkowy w Jest

Plik `sum.test.js`:

```javascript
const sum = require("./sum");

test("dodaje dwie liczby", () => {
  expect(sum(2, 3)).toBe(5);
});
```

## Czym jest Jest?

Jest to framework do testowania kodu JavaScript. Pozwala pisać testy jednostkowe, czyli małe testy sprawdzające pojedyncze funkcje lub fragmenty aplikacji.

W tym przykładzie Jest sprawdza, czy funkcja `sum(2, 3)` zwraca wynik `5`.

## Instalacja Jest w projekcie

Najpierw trzeba zainicjalizować projekt Node.js, jeśli nie ma jeszcze pliku `package.json`:

```bash
npm init -y
```

Następnie należy zainstalować Jest jako zależność developerską:

```bash
npm install --save-dev jest
```

W pliku `package.json` warto dodać skrypt testowy:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

## Uruchomienie testu

Test można uruchomić poleceniem:

```bash
npm test
```

Można też uruchomić Jest bezpośrednio:

```bash
npx jest
```

Jeśli wszystko działa poprawnie, test powinien przejść, ponieważ `2 + 3` daje `5`.

## Struktura plików projektu

```text
.
├── package.json
├── sum.js
├── sum.test.js
└── zadanie-11.md
```

## Wyjaśnienie testu

Linia:

```javascript
const sum = require("./sum");
```

importuje funkcję `sum` z pliku `sum.js`.

Linia:

```javascript
test("dodaje dwie liczby", () => {
```

tworzy test o nazwie `dodaje dwie liczby`.

Linia:

```javascript
expect(sum(2, 3)).toBe(5);
```

uruchamia funkcję `sum` z argumentami `2` i `3`, a następnie sprawdza, czy wynik jest równy `5`.
