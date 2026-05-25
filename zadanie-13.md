# Zadanie 13

## Pliki

- `fetch-user.js` - oryginalna funkcja `fetchUserData`
- `fetch-user-documented.js` - ta sama funkcja z komentarzem dokumentacyjnym JSDoc

## Czym jest JSDoc?

JSDoc to format komentarzy dokumentacyjnych dla kodu JavaScript. Pozwala opisać działanie funkcji, jej parametry, typy danych oraz zwracaną wartość.

Komentarz JSDoc zapisuje się bezpośrednio nad funkcją, używając składni:

```javascript
/**
 * Opis funkcji.
 *
 * @param {typ} nazwa - Opis parametru.
 * @returns {typ} Opis zwracanej wartosci.
 */
```

## Oryginalna funkcja

```javascript
function fetchUserData(userId) {
  return fetch(`https://api.example.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return {
        name: data.name,
        email: data.email,
        lastLogin: new Date(data.lastLoginTimestamp)
      };
    })
    .catch(error => {
      console.error('Fetch error:', error);
      return null;
    });
}
```

## Funkcja z komentarzem JSDoc

```javascript
/**
 * Pobiera dane uzytkownika z API i zwraca wybrane pola w uproszczonym formacie.
 *
 * Funkcja wykonuje zapytanie HTTP pod adres zawierajacy identyfikator uzytkownika.
 * Jesli odpowiedz ma status bledu, rzuca wyjatek, ktory jest nastepnie obslugiwany
 * w bloku catch. W przypadku bledu funkcja wypisuje komunikat w konsoli i zwraca null.
 *
 * @param {string|number} userId - Identyfikator uzytkownika pobieranego z API.
 * @returns {Promise<{name: string, email: string, lastLogin: Date}|null>} Promise,
 * ktory zwraca obiekt z imieniem, adresem e-mail i data ostatniego logowania albo null,
 * jesli wystapil blad pobierania lub przetwarzania danych.
 */
function fetchUserData(userId) {
  return fetch(`https://api.example.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return {
        name: data.name,
        email: data.email,
        lastLogin: new Date(data.lastLoginTimestamp)
      };
    })
    .catch(error => {
      console.error('Fetch error:', error);
      return null;
    });
}
```

## Wyjaśnienie dodanych komentarzy

W komentarzu JSDoc użyto:

- `@param {string|number} userId` - informuje, że funkcja przyjmuje identyfikator użytkownika jako tekst albo liczbę.
- `@returns {Promise<{name: string, email: string, lastLogin: Date}|null>}` - informuje, że funkcja zwraca obietnicę z obiektem użytkownika albo `null` w przypadku błędu.

Dzięki JSDoc kod jest czytelniejszy, a edytory kodu mogą podpowiadać typy parametrów i wartości zwracanych przez funkcję.
