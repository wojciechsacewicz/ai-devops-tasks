# Zadanie 21

## Opis procesu konwersji JSON do CSV

Dane z pliku JSON zawieraja obiekt z tablica `users`. Kazdy element tej tablicy opisuje jednego uzytkownika i ma pola `id`, `name`, `email` oraz `roles`.

Podczas konwersji do CSV wykonano nastepujace kroki:

1. Odczytano tablice `users` z obiektu JSON.
2. Utworzono naglowek CSV z kolumnami: `id`, `name`, `email`, `roles`.
3. Dla kazdego uzytkownika utworzono jeden wiersz CSV.
4. Proste wartosci, takie jak `id`, `name` i `email`, wpisano bezposrednio do odpowiednich kolumn.
5. Tablice `roles` przeksztalcono w pojedynczy tekst, laczac role srednikiem.

Wynikowy plik CSV:

```csv
id,name,email,roles
1,Jan Kowalski,jan@example.com,"admin;user"
2,Anna Nowak,anna@example.com,"user"
```

## Potencjalne wyzwania

Najwiekszym wyzwaniem jest reprezentacja tablicy `roles` w formacie CSV. JSON pozwala przechowywac tablice jako naturalna strukture danych, natomiast CSV jest formatem tabelarycznym i kazda komorka zawiera tekst.

W tym zadaniu role zostaly zapisane w jednej kolumnie jako tekst rozdzielony srednikiem, na przyklad `"admin;user"`. Srednik zostal wybrany dlatego, ze przecinek jest domyslnym separatorem kolumn CSV. Dzieki temu latwiej uniknac pomylenia wielu rol z osobnymi kolumnami.

Inne mozliwe podejscia to:

- zapisanie rol jako tekstu rozdzielonego przecinkami, na przykład `"admin,user"`,
- utworzenie osobnych kolumn, takich jak `role1`, `role2`,
- utworzenie osobnej tabeli CSV z relacja uzytkownik-rola.

Przy wiekszych danych trzeba tez uwazac na znaki specjalne w polach tekstowych. Jesli imie, email lub rola zawieraja przecinek, cudzyslow albo znak nowej linii, wartosc powinna byc odpowiednio zapisana w cudzyslowie zgodnie z zasadami CSV.
