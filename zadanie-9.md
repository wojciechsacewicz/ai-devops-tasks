# Zadanie 9

## Oryginalny plik YML

```yaml
services:
  web:
    image: nginx
    ports:
      - "80:80"
  app:
    build: .
    ports
      - "3000:3000"
    depends_on:
      - db
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD=password
```

## Czy plik jest poprawny?

Nie, plik nie jest poprawny. Zawiera blad skladni YAML w sekcji `app`.

## Znalezione bledy

1. W sekcji `app` przy kluczu `ports` brakuje dwukropka.

   Jest:

   ```yaml
   ports
     - "3000:3000"
   ```

   Powinno byc:

   ```yaml
   ports:
     - "3000:3000"
   ```

2. W sekcji `environment` dla bazy danych uzyto zapisu:

   ```yaml
   POSTGRES_PASSWORD=password
   ```

   W Docker Compose taki zapis moze dzialac, gdy `environment` jest lista, ale tutaj `environment` jest mapa. W mapie poprawny i czytelny zapis to:

   ```yaml
   POSTGRES_PASSWORD: password
   ```

## Poprawiona wersja

```yaml
services:
  web:
    image: nginx
    ports:
      - "80:80"

  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db

  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: password
```

## Podsumowanie

Najwazniejszym bledem byl brak dwukropka po `ports` w serwisie `app`, przez co plik nie byl poprawnym YAML-em. Dodatkowo poprawilem zapis zmiennej srodowiskowej `POSTGRES_PASSWORD`, aby pasowal do formatu mapy uzytego w sekcji `environment`.
