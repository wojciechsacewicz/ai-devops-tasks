# Simple Task API

## Opis

Simple Task API to proste REST API do zarzadzania zadaniami. Projekt jest napisany w Node.js z wykorzystaniem frameworka Express oraz bazy danych MongoDB.

API umozliwia tworzenie, odczytywanie, aktualizowanie i usuwanie zadan. Dodatkowo wspiera filtrowanie zadan wedlug statusu i priorytetu oraz prosta autoryzacje uzytkownikow.

## Instalacja

1. Sklonuj repozytorium:

```bash
git clone <adres-repozytorium>
cd simple-task-api
```

2. Zainstaluj zaleznosci:

```bash
npm install
```

3. Utworz plik `.env` i ustaw podstawowe zmienne srodowiskowe:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/simple-task-api
JWT_SECRET=twoj-sekretny-klucz
```

4. Uruchom aplikacje:

```bash
npm start
```

## Uzycie

Po uruchomieniu serwer bedzie dostepny domyslnie pod adresem:

```text
http://localhost:3000
```

Przykladowe pobranie listy zadan:

```bash
curl http://localhost:3000/api/tasks
```

Przykladowe utworzenie zadania:

```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"title":"Przykladowe zadanie","status":"todo","priority":"medium"}'
```

## Endpointy API

### Autoryzacja

| Metoda | Endpoint | Opis |
| --- | --- | --- |
| `POST` | `/api/auth/register` | Rejestracja nowego uzytkownika. |
| `POST` | `/api/auth/login` | Logowanie uzytkownika i pobranie tokenu. |

### Zadania

| Metoda | Endpoint | Opis |
| --- | --- | --- |
| `GET` | `/api/tasks` | Pobranie listy zadan. |
| `GET` | `/api/tasks/:id` | Pobranie jednego zadania po identyfikatorze. |
| `POST` | `/api/tasks` | Utworzenie nowego zadania. |
| `PUT` | `/api/tasks/:id` | Aktualizacja zadania. |
| `DELETE` | `/api/tasks/:id` | Usuniecie zadania. |

### Filtrowanie zadan

Liste zadan mozna filtrowac za pomoca parametrow zapytania:

```text
GET /api/tasks?status=todo&priority=high
```

Dostepne parametry:

| Parametr | Opis |
| --- | --- |
| `status` | Filtruje zadania wedlug statusu, np. `todo`, `in-progress`, `done`. |
| `priority` | Filtruje zadania wedlug priorytetu, np. `low`, `medium`, `high`. |
