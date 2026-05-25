# Zadanie 12

## Oryginalna wersja funkcji

```python
def find_duplicates(list_of_items):
    duplicates = []
    for i in range(len(list_of_items)):
        for j in range(i+1, len(list_of_items)):
            if list_of_items[i] == list_of_items[j] and list_of_items[i] not in duplicates:
                duplicates.append(list_of_items[i])
    return duplicates
```

## Zoptymalizowana wersja funkcji

```python
def find_duplicates(list_of_items):
    seen = set()
    duplicates = set()

    for item in list_of_items:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)

    return list(duplicates)
```

## Wyjaśnienie usprawnień

Oryginalna funkcja używa dwóch zagnieżdżonych pętli. Dla każdego elementu sprawdza wszystkie kolejne elementy listy, więc jej złożoność czasowa wynosi `O(n^2)`. Dodatkowo warunek:

```python
list_of_items[i] not in duplicates
```

również przeszukuje listę, co może dodatkowo spowalniać działanie programu.

Zoptymalizowana wersja używa zbiorów `set`. Sprawdzenie, czy element znajduje się w zbiorze, jest średnio operacją `O(1)`. Dzięki temu wystarczy przejść przez listę tylko raz.

Złożoność zoptymalizowanej wersji:

- czasowa: `O(n)`
- pamięciowa: `O(n)`

Zmienna `seen` przechowuje elementy, które pojawiły się już wcześniej. Jeśli aktualny element znajduje się już w `seen`, oznacza to, że jest duplikatem, więc trafia do zbioru `duplicates`.

Ta wersja jest bardziej wydajna dla dużych list, ale zakłada, że elementy listy są hashowalne, na przykład liczby, napisy albo krotki. Dla list zawierających elementy niehashowalne, na przykład inne listy, należałoby zastosować inne podejście.
