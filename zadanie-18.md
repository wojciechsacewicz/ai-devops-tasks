# Zadanie 18

## 5 kluczowych praktyk bezpieczeństwa dla aplikacji Dockerowych w produkcji

### 1. Uruchamianie kontenera jako użytkownik nieuprzywilejowany

Kontener nie powinien działać jako użytkownik `root`, jeśli aplikacja tego nie wymaga. Uruchamianie procesu jako zwykły użytkownik ogranicza skutki ewentualnego włamania do kontenera.

Jeśli atakujący przejmie aplikację działającą jako `root`, może mieć większe możliwości modyfikacji plików, instalowania narzędzi lub wykorzystywania błędów konfiguracji. Użytkownik nieuprzywilejowany zmniejsza ten zakres uprawnień.

### 2. Używanie minimalnych i aktualnych obrazów bazowych

Warto używać małych obrazów, na przykład `alpine`, `slim` albo obrazów distroless. Im mniej pakietów znajduje się w obrazie, tym mniejsza powierzchnia ataku.

Obrazy powinny być regularnie aktualizowane, aby zawierały poprawki bezpieczeństwa.

### 3. Nieprzechowywanie sekretów w obrazie

Hasła, tokeny API, klucze prywatne i dane dostępowe nie powinny być zapisywane w `Dockerfile`, obrazie ani repozytorium.

Sekrety należy przekazywać przez zmienne środowiskowe, pliki `.env`, Docker secrets albo zewnętrzne systemy zarządzania sekretami.

### 4. Ograniczanie uprawnień kontenera

Kontener powinien mieć tylko takie uprawnienia, których naprawdę potrzebuje. W produkcji warto stosować między innymi:

- `read_only: true`,
- `cap_drop`,
- limity CPU i pamięci,
- ograniczone wolumeny,
- brak dostępu do Docker socket, jeśli nie jest konieczny.

### 5. Skanowanie obrazów pod kątem podatności

Przed wdrożeniem obrazy Dockerowe powinny być skanowane narzędziami wykrywającymi znane podatności, na przykład Docker Scout, Trivy albo Grype.

Dzięki temu można wykryć podatne biblioteki systemowe lub zależności aplikacji przed uruchomieniem obrazu w środowisku produkcyjnym.

## Jak zaimplementować pierwszą praktykę?

Pierwszą praktyką jest uruchamianie aplikacji jako użytkownik nieuprzywilejowany zamiast `root`.

Można to zrobić na dwa sposoby:

- utworzyć użytkownika w `Dockerfile` i użyć instrukcji `USER`,
- dodatkowo wymusić użytkownika w `docker-compose.yml` przez pole `user`.

## Przykład implementacji w Dockerfile

```dockerfile
FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

# Utworzenie nieuprzywilejowanego uzytkownika aplikacji
RUN groupadd -r appuser && useradd -r -g appuser appuser

# Nadanie uzytkownikowi uprawnien do katalogu aplikacji
RUN chown -R appuser:appuser /app

# Uruchamianie aplikacji jako zwykly uzytkownik, nie root
USER appuser

EXPOSE 3000

CMD ["npm", "start"]
```

W tym przykładzie:

- `groupadd` tworzy grupę `appuser`,
- `useradd` tworzy użytkownika `appuser`,
- `chown` nadaje temu użytkownikowi dostęp do katalogu `/app`,
- `USER appuser` sprawia, że aplikacja uruchamia się bez uprawnień `root`.

## Przykład implementacji w docker-compose.yml

```yaml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    user: "1000:1000"
    read_only: true
    tmpfs:
      - /tmp
    environment:
      NODE_ENV: production
```

W tym przykładzie:

- `user: "1000:1000"` wymusza uruchomienie procesu jako użytkownik o UID `1000` i GID `1000`,
- `read_only: true` ogranicza możliwość zapisu w systemie plików kontenera,
- `tmpfs: /tmp` pozwala aplikacji używać katalogu tymczasowego, mimo że główny system plików jest tylko do odczytu.

## Wariant spójny z użytkownikiem z Dockerfile

Jeżeli w obrazie utworzono użytkownika `appuser`, można też użyć jego nazwy:

```yaml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    user: "appuser"
    environment:
      NODE_ENV: production
```

## Wniosek

Najważniejsze jest to, aby aplikacja w kontenerze produkcyjnym nie działała jako `root`. Najczęściej robi się to przez instrukcję `USER` w `Dockerfile`. Dodatkowo można wymusić użytkownika i ograniczyć uprawnienia kontenera w `docker-compose.yml`.
