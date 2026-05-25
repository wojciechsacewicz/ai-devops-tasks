# Podsumowanie nauki z AI

## Kontekst

W ramach serii zadań wykorzystałem AI do pracy nad tematami związanymi z DevOps, dokumentacją, Dockerem, bezpieczeństwem, analizą logów, testami, refaktoryzacją kodu, optymalizacją oraz interpretacją metryk aplikacji. Zadania pokazały, że AI może być przydatnym wsparciem w codziennej pracy technicznej, ale nie powinno zastępować samodzielnej weryfikacji, testowania i rozumienia problemu.

## Kluczowe wnioski z pracy z AI

Najważniejszy wniosek jest taki, że jakość odpowiedzi AI bardzo mocno zależy od jakości polecenia. Prosty, ogólny prompt zwykle daje poprawną, ale powierzchowną odpowiedź. Prompt zawierający kontekst, rolę, oczekiwany format i ograniczenia daje wynik znacznie bardziej użyteczny.

AI dobrze sprawdza się jako narzędzie do szybkiego startu. Pomaga przygotować pierwszą wersję dokumentacji, skryptu, testu jednostkowego, pliku konfiguracyjnego albo analizy problemu. Dzięki temu można szybciej przejść od pustej strony do konkretnego rozwiązania.

Drugim ważnym wnioskiem jest konieczność weryfikacji. AI potrafi wygenerować logicznie brzmiącą odpowiedź, która może zawierać błędy, uproszczenia albo założenia niezgodne z rzeczywistym projektem. W DevOps jest to szczególnie ważne, ponieważ błędna konfiguracja, zły sekret w repozytorium, niepoprawny Dockerfile albo źle zinterpretowane metryki mogą mieć realne skutki dla działania systemu.

AI jest też przydatne do tłumaczenia problemów technicznych prostszym językiem. W zadaniach związanych z logami, błędami Dockera, dokumentacją API i metrykami serwera AI pomagało uporządkować informacje oraz wskazać możliwe przyczyny problemów.

## Najmocniejsze strony AI w kontekście DevOps

- szybkie generowanie dokumentacji technicznej, README, opisów endpointów i komentarzy JSDoc,
- pomoc w analizie logów, błędów i komunikatów systemowych,
- tworzenie prostych skryptów automatyzujących, na przykład w Bash lub PowerShell,
- wyjaśnianie konfiguracji Docker, `.gitignore`, CI/CD i podstaw bezpieczeństwa,
- proponowanie testów jednostkowych oraz prostych usprawnień kodu,
- porządkowanie danych i formułowanie wniosków z metryk wydajnościowych,
- przyspieszanie nauki nowych narzędzi przez przykłady i wyjaśnienia krok po kroku.

## Najsłabsze strony AI w kontekście DevOps

- AI może nie znać pełnego kontekstu infrastruktury, środowiska produkcyjnego i ograniczeń projektu,
- odpowiedzi bywają zbyt ogólne, jeśli prompt nie zawiera konkretnych danych,
- AI może proponować rozwiązania poprawne teoretycznie, ale nieoptymalne dla danego systemu,
- wygenerowana konfiguracja wymaga sprawdzenia, bo drobny błąd w YAML, Dockerfile albo skrypcie może zatrzymać deployment,
- AI nie zastępuje monitoringu, testów, code review i realnego uruchomienia rozwiązania,
- istnieje ryzyko bezrefleksyjnego zaakceptowania odpowiedzi, która brzmi profesjonalnie, ale nie została potwierdzona.

## Scenariusze, w których AI może najbardziej usprawnić pracę

### 1. Analiza błędów i logów

AI może pomóc szybko wyjaśnić, co oznacza komunikat błędu, np. zajęty port Dockera, błąd połączenia z bazą danych albo restart aplikacji. Może też zaproponować listę możliwych przyczyn i kolejność sprawdzania problemu. Największa wartość pojawia się wtedy, gdy do promptu wklejone są konkretne logi, konfiguracja i objawy.

### 2. Tworzenie i poprawianie dokumentacji

AI dobrze nadaje się do generowania pierwszej wersji README, dokumentacji API, opisów funkcji i instrukcji uruchomienia projektu. Może też pomóc poprawić czytelność istniejącej dokumentacji oraz dopisać brakujące sekcje, np. instalację, zmienne środowiskowe, endpointy, testy i sposób deploymentu.

### 3. Automatyzacja prostych zadań

AI może przyspieszyć pisanie skryptów Bash i PowerShell, np. do backupu, sprawdzania działania Dockera, konwersji danych JSON do CSV albo wykonywania powtarzalnych czynności administracyjnych. W takim scenariuszu trzeba jednak zawsze uruchomić skrypt testowo i sprawdzić obsługę błędów.

### 4. Wsparcie przy jakości kodu

AI może pomóc w refaktoryzacji prostych funkcji, dodawaniu komentarzy JSDoc, pisaniu testów jednostkowych i wyjaśnianiu złożoności algorytmów. Dobrze sprawdza się jako partner do przeglądu kodu, szczególnie gdy celem jest czytelność, prostsza struktura albo usunięcie powtarzalności.

### 5. Interpretacja metryk i planowanie optymalizacji

AI może pomóc przełożyć dane wydajnościowe na konkretne wnioski: rozpoznać wysoki `p99`, obliczyć procent błędów `5xx`, wskazać ryzyko związane z pamięcią i zaproponować dalsze kroki diagnostyczne. Jest to przydatne szczególnie wtedy, gdy trzeba szybko przygotować wstępną analizę incydentu albo raport dla zespołu.

## Wskazówki do efektywnego korzystania z AI w przyszłych projektach

- podawać pełny kontekst: cel, technologię, środowisko, ograniczenia i oczekiwany format odpowiedzi,
- prosić AI nie tylko o rozwiązanie, ale też o wyjaśnienie założeń i możliwych ryzyk,
- weryfikować każdą konfigurację przez testy, uruchomienie lokalne albo review,
- nie wklejać sekretów, tokenów, haseł ani prywatnych danych do promptów,
- traktować AI jako asystenta, a nie źródło ostatecznej prawdy,
- rozbijać większe problemy na mniejsze kroki, np. diagnoza, hipotezy, poprawka, test,
- porównywać różne warianty odpowiedzi, szczególnie przy decyzjach architektonicznych,
- wymagać konkretnych przykładów, komend i plików zamiast ogólnych opisów,
- po wygenerowaniu kodu sprawdzać przypadki brzegowe, obsługę błędów i bezpieczeństwo.

## Moje przemyślenia

Największą wartością AI w DevOps nie jest samo generowanie kodu, ale przyspieszenie myślenia operacyjnego. AI pomaga szybciej nazwać problem, uporządkować objawy, zaproponować checklistę diagnostyczną i przygotować pierwszą wersję rozwiązania. To skraca czas potrzebny na rozpoczęcie pracy.

Jednocześnie DevOps wymaga dużej odpowiedzialności, dlatego AI powinno być używane ostrożnie. Wygenerowany skrypt może usunąć złe pliki, źle ustawiony `.gitignore` może nie ochronić sekretów, a błędna interpretacja metryk może skierować optymalizację w niewłaściwą stronę. Dlatego najlepszy model pracy to połączenie AI z praktyczną weryfikacją: testami, logami, monitoringiem i review.

Po wykonaniu zadań widać też, że AI jest szczególnie dobre w zadaniach powtarzalnych i komunikacyjnych: dokumentowaniu, streszczaniu, wyjaśnianiu, porządkowaniu i tworzeniu szablonów. Słabsze jest tam, gdzie potrzebna jest pełna wiedza o konkretnym systemie produkcyjnym, jego historii, zależnościach i nietypowych ograniczeniach.

## Wniosek końcowy

AI może realnie usprawnić pracę DevOps, jeśli jest używane świadomie. Najlepiej sprawdza się jako narzędzie wspierające analizę, dokumentację, automatyzację i naukę. Nie zastępuje jednak doświadczenia, testów ani odpowiedzialności za działający system. W przyszłych projektach warto korzystać z AI regularnie, ale zawsze z zasadą: wygeneruj szybciej, zrozum dokładnie, sprawdź przed użyciem.
