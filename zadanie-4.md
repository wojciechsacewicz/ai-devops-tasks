# Zadanie 4

## Prompt 1 - zwykle pytanie

```text
Jak rozwiazac problem z duzym zuzyciem pamieci przez kontener Docker?
```

## Odpowiedz 1

Problem z duzym zuzyciem pamieci przez kontener Docker mozna rozwiazac, zaczynajac od sprawdzenia, ktory kontener zuzywa najwiecej zasobow.

Przydatne polecenia:

```bash
docker stats
docker ps
docker logs <nazwa_kontenera>
```

Nastepnie warto sprawdzic, czy aplikacja uruchomiona w kontenerze nie ma wycieku pamieci albo nie przetwarza zbyt duzej ilosci danych naraz. Mozna tez ustawic limit pamieci dla kontenera, na przyklad:

```bash
docker run --memory=512m moja-aplikacja
```

Dobrym rozwiazaniem jest rowniez optymalizacja aplikacji, usuniecie niepotrzebnych procesow z obrazu oraz regularne monitorowanie zuzycia zasobow.

## Prompt 2 - pytanie z przypisana rola

```text
Jestes doswiadczonym DevOps Engineerem z 10-letnim doswiadczeniem. Jak rozwiazac problem z duzym zuzyciem pamieci przez kontener Docker?
```

## Odpowiedz 2

Jako DevOps Engineer zaczalbym od rozdzielenia problemu na trzy obszary: pomiar, diagnoze przyczyny i zabezpieczenie srodowiska przed ponownym wystapieniem problemu.

Najpierw sprawdzilbym rzeczywiste zuzycie pamieci:

```bash
docker stats
docker inspect <container_id>
docker logs <container_id>
```

W `docker inspect` warto sprawdzic konfiguracje limitow pamieci oraz informacje o tym, czy kontener byl zatrzymany przez mechanizm OOM. Jezeli kontener dziala w Kubernetes, sprawdzilbym takze `requests`, `limits`, restarty poda i zdarzenia:

```bash
kubectl describe pod <pod_name>
kubectl top pod
kubectl logs <pod_name>
```

Nastepnie szukalbym przyczyny w samej aplikacji: wycieku pamieci, zbyt duzego cache, niezamykanych polaczen, przetwarzania zbyt duzych plikow lub niepoprawnej konfiguracji runtime. Dla Node.js mozna na przyklad ustawic limit sterty:

```bash
node --max-old-space-size=512 app.js
```

Dla kontenera warto ustawic limity zasobow, aby pojedyncza usluga nie zajela calej pamieci hosta:

```bash
docker run --memory=512m --memory-swap=512m moja-aplikacja
```

Na koniec wdrozylbym monitoring i alerty, na przyklad w Prometheusie i Grafanie, oraz dodalbym testy obciazeniowe. Samo zwiekszenie pamieci moze tylko ukryc problem, dlatego najpierw trzeba potwierdzic, czy przyczyna lezy w aplikacji, konfiguracji kontenera, czy w zbyt malych limitach zasobow.

## Porownanie i obserwacje

Pierwsza odpowiedz jest krotsza, prostsza i bardziej ogolna. Podaje podstawowe komendy Docker oraz ogolne sugestie, takie jak sprawdzenie logow, ustawienie limitu pamieci i optymalizacja aplikacji.

Druga odpowiedz jest bardziej specjalistyczna i uporzadkowana. Zawiera sposob diagnozy krok po kroku, rozroznia pomiar, analize przyczyny i zabezpieczenie systemu, wspomina o OOM, limitach zasobow, Kubernetes, monitoringu, alertach i testach obciazeniowych.

Wniosek: przypisanie modelowi konkretnej roli powoduje, ze odpowiedz jest bardziej techniczna, szczegolowa i zblizona do praktycznego podejscia specjalisty. Zwykle pytanie daje odpowiedz wystarczajaca na poziomie podstawowym, ale prompt z rola lepiej nadaje sie do analizy realnego problemu produkcyjnego.
