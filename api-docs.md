# Dokumentacja API

## GET /api/users

Zwraca listę użytkowników. Endpoint obsługuje paginację oraz opcjonalne filtrowanie użytkowników według roli.

## Parametry zapytania

| Parametr | Typ | Wymagany | Domyślnie | Opis |
| --- | --- | --- | --- | --- |
| `page` | number | nie | `1` | Numer strony wyników. |
| `limit` | number | nie | `10` | Liczba wyników na stronę. Maksymalna wartość to `100`. |
| `role` | string | nie | brak | Opcjonalny filtr według roli użytkownika. |

## Przykładowe żądanie

```http
GET /api/users?page=1&limit=10&role=admin HTTP/1.1
Host: example.com
Accept: application/json
```

## Przykładowa odpowiedź

```json
{
  "data": [
    {
      "id": 1,
      "name": "Jan Kowalski",
      "email": "jan.kowalski@example.com",
      "role": "admin"
    },
    {
      "id": 2,
      "name": "Anna Nowak",
      "email": "anna.nowak@example.com",
      "role": "admin"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 2,
    "totalPages": 1
  }
}
```

## Kody odpowiedzi

| Kod | Znaczenie |
| --- | --- |
| `200 OK` | Lista użytkowników została zwrócona poprawnie. |
| `400 Bad Request` | Nieprawidłowe parametry zapytania, na przykład `limit` większy niż `100`. |
| `500 Internal Server Error` | Błąd serwera podczas pobierania listy użytkowników. |
