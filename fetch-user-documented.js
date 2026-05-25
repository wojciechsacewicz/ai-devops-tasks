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
