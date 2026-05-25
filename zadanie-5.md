# Zadanie 5

## Prompt 1

```text
Stworz prosty diagram ASCII Art przedstawiajacy polaczenie klienta, serwera aplikacji i bazy danych.
```

## Diagram 1

```text
+-----------+        +-------------------+        +-------------+
|  Klient   | -----> | Serwer aplikacji  | -----> | Baza danych |
+-----------+        +-------------------+        +-------------+
```

## Prompt 2

```text
Dodaj do diagramu opisy elementow i kierunki przeplywu danych.
```

## Diagram 2

```text
       Zadanie HTTP                         Zapytanie SQL
          request                              query
+-------------------+                  +-------------------+                  +-------------------+
|      Klient       | ---------------> | Serwer aplikacji  | ---------------> |    Baza danych    |
| przegladarka/API  |                  | logika biznesowa  |                  | tabele i rekordy  |
+-------------------+                  +-------------------+                  +-------------------+
          ^                                      |                                      |
          |                                      |                                      |
          |             Odpowiedz HTTP          |             Wynik zapytania          |
          +--------------------------------------+ <------------------------------------+
                        response                              result
```

## Wnioski

Pierwszy diagram pokazuje tylko podstawowe polaczenie miedzy trzema elementami systemu: klientem, serwerem aplikacji i baza danych. Jest krotki i czytelny, ale nie wyjasnia, jakie dane przeplywaja miedzy komponentami.

Drugi diagram jest bardziej szczegolowy. Dodaje role poszczegolnych elementow, na przyklad przegladarke lub API po stronie klienta, logike biznesowa po stronie serwera oraz tabele i rekordy w bazie danych. Pokazuje tez kierunki przeplywu danych: zadanie HTTP od klienta do serwera, zapytanie SQL do bazy danych, wynik zapytania z bazy oraz odpowiedz HTTP wracajaca do klienta.
