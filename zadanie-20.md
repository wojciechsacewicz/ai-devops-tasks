# Zadanie 20

## Wyrazenie regularne

```regex
^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$
```

## Wyjasnienie

To wyrazenie regularne sprawdza, czy tekst ma format adresu IPv4, czyli cztery liczby oddzielone kropkami. Kazda liczba musi byc z zakresu od `0` do `255`.

- `^` oznacza poczatek tekstu.
- `$` oznacza koniec tekstu.
- `(?: ... )` tworzy grupe bez zapamietywania dopasowania.
- `(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)` opisuje pojedynczy oktet adresu IP:
  - `25[0-5]` dopasowuje liczby od `250` do `255`,
  - `2[0-4]\d` dopasowuje liczby od `200` do `249`,
  - `1\d\d` dopasowuje liczby od `100` do `199`,
  - `[1-9]?\d` dopasowuje liczby od `0` do `99`, bez zer wiodacych.
- `\.` dopasowuje zwykla kropke.
- `(?:oktet\.){3}` wymaga trzech pierwszych oktetow zakonczonych kropka.
- Ostatni oktet jest dopasowany osobno, bez kropki na koncu.

Wyrazenie nie akceptuje zer wiodacych, dlatego adres `192.168.001.1` jest uznawany za niepoprawny.

## Przyklady testow

| Adres IP | Wynik | Wyjasnienie |
| --- | --- | --- |
| `192.168.1.1` | poprawny | Cztery oktety z zakresu `0-255`. |
| `0.0.0.0` | poprawny | Najmniejsza poprawna wartosc w kazdym oktecie. |
| `255.255.255.255` | poprawny | Najwieksza poprawna wartosc w kazdym oktecie. |
| `10.20.30.40` | poprawny | Standardowy adres z czterema poprawnymi oktetami. |
| `256.100.50.25` | niepoprawny | `256` przekracza maksymalna wartosc oktetu. |
| `192.168.1` | niepoprawny | Brakuje czwartego oktetu. |
| `192.168.1.1.5` | niepoprawny | Adres ma piec oktetow. |
| `192.168.001.1` | niepoprawny | Oktet `001` ma zera wiodace. |
| `abc.def.ghi.jkl` | niepoprawny | Oktety musza byc liczbami. |

## Funkcja JavaScript

Plik `ipv4-validator.js` zawiera funkcje `isValidIPv4`, ktora wykorzystuje powyzsze wyrazenie regularne do walidacji adresu IPv4.
