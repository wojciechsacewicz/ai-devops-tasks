# Zadanie 24

## Dane wydajnosciowe

Metryki serwera API z ostatnich 24 godzin:

- sredni czas odpowiedzi: `230 ms`,
- 95 percentyl czasu odpowiedzi: `450 ms`,
- 99 percentyl czasu odpowiedzi: `1200 ms`,
- liczba zapytan: `15 000`,
- liczba bledow `5xx`: `120`,
- uzycie CPU: srednio `45%`, maksymalnie `80%`,
- uzycie pamieci: srednio `2.1 GB`, maksymalnie `3.5 GB` z `4 GB` dostepnych.

## Interpretacja

Sredni czas odpowiedzi `230 ms` wyglada akceptowalnie, ale percentyle pokazuja, ze czesc uzytkownikow czeka znacznie dluzej. `95%` zapytan konczy sie w czasie do `450 ms`, natomiast `99%` zapytan w czasie do `1200 ms`. Oznacza to, ze okolo `1%` zapytan, czyli przy `15 000` zapytan okolo `150` requestow, ma czas odpowiedzi na poziomie co najmniej zblizonym do `1.2 s` albo wyzszy. Problem nie dotyczy wiekszosci ruchu, ale ogon latencji jest wyrazny.

Liczba bledow `5xx` wynosi `120`, czyli:

```text
120 / 15000 * 100% = 0.8%
```

Blad serwera dla prawie `1%` zapytan to sygnal ostrzegawczy. W stabilnym API taki poziom bledow jest zwykle za wysoki, szczegolnie jesli dotyczy operacji krytycznych dla uzytkownika.

CPU srednio jest obciazone na `45%`, a maksymalnie na `80%`. Nie wyglada to jak staly problem z brakiem mocy obliczeniowej, ale chwilowe piki CPU moga zwiekszac czas odpowiedzi. Pamiec jest bardziej niepokojaca: maksimum `3.5 GB` przy `4 GB` dostepnych oznacza wykorzystanie okolo `87.5%` pamieci. Przy dalszym wzroscie ruchu lub przy wyciekach pamieci aplikacja moze zaczac korzystac ze swapu, wolniej odpowiadac albo byc ubijana przez system.

## Potencjalne problemy

- wysoki ogon latencji: `p99 = 1200 ms` jest duzo wyzszy niz srednia `230 ms`,
- zbyt duzy odsetek bledow serwera: `0.8%` odpowiedzi `5xx`,
- wysokie maksymalne zuzycie pamieci: `3.5 GB` z `4 GB`,
- mozliwe chwilowe przeciazenia CPU, poniewaz maksimum dochodzi do `80%`,
- mozliwe wolne zapytania do bazy danych, zewnetrznych API albo operacje blokujace w aplikacji,
- mozliwe problemy tylko dla wybranych endpointow, poniewaz srednia jest dobra, ale `p99` znacznie odstaje.

## Sugestie poprawy wydajnosci

Najpierw warto rozbic metryki wedlug endpointow, metod HTTP i kodow odpowiedzi. Sama srednia dla calego API ukrywa problem. Trzeba sprawdzic, ktore endpointy generuja najdluzsze czasy odpowiedzi i najwiecej bledow `5xx`.

Nastepnie nalezy przeanalizowac logi aplikacji dla bledow `5xx`. Warto sprawdzic konkretne stack trace'y, timeouty, bledy polaczen z baza danych, przekroczenia limitow zewnetrznych API oraz ewentualne restarty procesu.

Dla wysokiego `p99` dobrym krokiem jest profilowanie najwolniejszych requestow. Mozna dodac tracing lub APM, np. pomiar czasu w warstwach: routing, logika aplikacji, baza danych, cache, zewnetrzne uslugi. Jesli problemem sa zapytania SQL, nalezy sprawdzic plany zapytan, indeksy, liczbe zapytan wykonywanych na jeden request i problem N+1.

Przy wysokim zuzyciu pamieci warto sprawdzic, czy aplikacja nie ma wycieku pamieci. Nalezy obserwowac trend pamieci w czasie, a nie tylko wartosci srednie i maksymalne. Jesli pamiec stale rosnie az do restartu, potrzebny jest heap dump albo profilowanie pamieci. Jesli skoki sa naturalne, mozna rozwazyc zwiekszenie limitu pamieci lub uruchomienie wiekszej liczby instancji.

Wydajnosc mozna poprawic przez:

- cache'owanie czesto pobieranych danych,
- dodanie lub poprawienie indeksow w bazie danych,
- ograniczenie kosztownych operacji synchronicznych,
- przeniesienie dlugich zadan do kolejki asynchronicznej,
- ustawienie sensownych timeoutow dla bazy danych i zewnetrznych API,
- optymalizacje najwolniejszych endpointow zamiast ogolnych zmian w calej aplikacji,
- skalowanie horyzontalne, jesli piki ruchu sa regularne,
- ustawienie alertow dla `p95`, `p99`, liczby bledow `5xx`, CPU i pamieci.

## Wniosek

API dziala poprawnie dla wiekszosci zapytan, ale widac trzy wazne sygnaly ostrzegawcze: wysoki `p99`, `0.8%` bledow `5xx` oraz wysokie maksymalne zuzycie pamieci. Najwazniejsze jest znalezienie zrodel bledow `5xx` i najwolniejszych requestow, bo to one najprawdopodobniej odpowiadaja za pogorszenie doswiadczenia uzytkownikow.
