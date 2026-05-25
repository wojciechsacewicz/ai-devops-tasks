# Zadanie 10

## Dlaczego ważne jest ignorowanie tych plików?

Plik `.gitignore` pozwala wskazać, których plików i katalogów Git nie powinien dodawać do repozytorium. Jest to ważne, ponieważ w projekcie Node.js, Docker i lokalna baza MongoDB tworzą wiele plików technicznych, tymczasowych lub zależnych od konkretnego komputera.

Katalog `node_modules/` nie powinien trafiać do repozytorium, ponieważ zawiera zainstalowane zależności projektu. Może być bardzo duży, a jego zawartość można odtworzyć na podstawie plików `package.json` i `package-lock.json`.

Pliki `.env` często zawierają hasła, tokeny, connection stringi i inne dane poufne. Dodanie ich do repozytorium mogłoby przypadkowo ujawnić sekrety aplikacji.

Katalogi takie jak `dist/`, `build/`, `coverage/` i cache są generowane automatycznie podczas budowania, testowania albo uruchamiania projektu. Nie warto ich wersjonować, bo mogą się często zmieniać i nie są źródłowym kodem aplikacji.

Lokalne dane MongoDB, na przykład `data/`, `mongo-data/` albo `mongodb-data/`, również nie powinny być zapisywane w repozytorium. Są to dane konkretnego środowiska lokalnego, mogą być duże i mogą zawierać prywatne informacje.

Ignorowanie tych plików pomaga utrzymać repozytorium mniejsze, czytelniejsze i bezpieczniejsze. Dzięki temu w Git znajdują się głównie pliki źródłowe oraz konfiguracja potrzebna do odtworzenia projektu, a nie lokalne dane, zależności i sekrety.
