# Zadanie 23

## Oryginalny algorytm

Funkcja `findPairs` sprawdza kazda pare elementow tablicy. Dla kazdego indeksu `i` uruchamiana jest petla po indeksach `j` znajdujacych sie dalej w tablicy.

Liczba porownan wynosi:

```text
(n - 1) + (n - 2) + ... + 1 = n * (n - 1) / 2
```

Dlatego zlozonosc czasowa oryginalnego algorytmu wynosi `O(n^2)`.

Zlozonosc pamieciowa zalezy od liczby znalezionych par. Poza tablica wynikowa algorytm uzywa tylko kilku zmiennych pomocniczych, czyli `O(1)`. Sama tablica `pairs` moze jednak przechowywac wiele wynikow. Jesli oznaczymy liczbe znalezionych par jako `k`, calkowita zlozonosc pamieciowa wynosi `O(k)`. W najgorszym przypadku `k` moze byc rzedu `O(n^2)`.

## Optymalizacja

Algorytm mozna zoptymalizowac przez uzycie struktury `Map`, ktora przechowuje liczbe wczesniej napotkanych wartosci.

Dla kazdego elementu `number` obliczany jest brakujacy element:

```text
complement = targetSum - number
```

Jesli `complement` wystapil juz wczesniej, to aktualny element tworzy z nim poprawna pare. Po sprawdzeniu par aktualna liczba zostaje dodana do mapy.

Taka wersja nie musi porownywac kazdego elementu z kazdym. Przechodzi po tablicy jeden raz, a wyszukiwanie w `Map` ma srednio zlozonosc `O(1)`.

Zlozonosc czasowa zoptymalizowanego algorytmu wynosi `O(n + k)`, gdzie `k` to liczba zwroconych par. Jesli par jest malo, dzialanie jest bliskie `O(n)`. Jesli trzeba zwrocic bardzo duzo par, samo zapisanie wyniku moze zajac `O(n^2)`.

Zlozonosc pamieciowa wynosi `O(n + k)`, poniewaz mapa moze przechowywac do `n` roznych lub powtarzajacych sie wartosci, a tablica wynikowa przechowuje `k` par.

## Porownanie

Oryginalna wersja:

- czas: `O(n^2)`,
- pamiec pomocnicza bez wyniku: `O(1)`,
- pamiec razem z wynikiem: `O(k)`.

Zoptymalizowana wersja:

- czas: `O(n + k)`,
- pamiec pomocnicza bez wyniku: `O(n)`,
- pamiec razem z wynikiem: `O(n + k)`.

Optymalizacja zamienia dodatkowa pamiec na szybsze wyszukiwanie par.
