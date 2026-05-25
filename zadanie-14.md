# Zadanie 14

## Logi

```text
May 19 10:15:32 server dockerd[1234]: time="2025-05-19T10:15:32.123456789Z" level=info msg="Container 78a2b3c4 health status changed from starting to healthy"
May 19 10:16:45 server dockerd[1234]: time="2025-05-19T10:16:45.987654321Z" level=info msg="Container 78a2b3c4 failed to connect to 172.17.0.3:5432: connection refused"
May 19 10:16:47 server dockerd[1234]: time="2025-05-19T10:16:47.246813579Z" level=warning msg="Container 78a2b3c4 health status changed from healthy to unhealthy"
```

## Co się dzieje w logach?

Logi pochodzą z usługi Docker daemon, czyli `dockerd`. Dotyczą kontenera o identyfikatorze `78a2b3c4`.

Najpierw kontener przechodzi ze stanu `starting` do `healthy`. Oznacza to, że początkowo test zdrowia kontenera zakończył się powodzeniem i Docker uznał kontener za działający poprawnie.

Następnie pojawia się komunikat:

```text
failed to connect to 172.17.0.3:5432: connection refused
```

Oznacza to, że kontener próbował połączyć się z adresem `172.17.0.3` na porcie `5432`, ale połączenie zostało odrzucone. Port `5432` jest standardowym portem PostgreSQL, więc najprawdopodobniej chodzi o próbę połączenia z bazą danych.

Na końcu stan zdrowia kontenera zmienia się z `healthy` na `unhealthy`. Oznacza to, że healthcheck kontenera zaczął kończyć się niepowodzeniem.

## Jakie problemy można zidentyfikować?

Możliwe problemy:

- baza danych PostgreSQL nie działa,
- baza danych jeszcze się uruchamia i nie jest gotowa na przyjmowanie połączeń,
- kontener próbuje połączyć się z nieprawidłowym adresem IP,
- usługa PostgreSQL działa, ale nie nasłuchuje na porcie `5432`,
- kontenery są w złej kolejności uruchamiania i aplikacja startuje przed bazą danych,
- konfiguracja sieci Dockera lub zmienne środowiskowe z adresem bazy są błędne,
- healthcheck aplikacji zależy od bazy danych i dlatego oznacza kontener jako `unhealthy`.

## Wniosek

Kontener początkowo uruchomił się poprawnie, ale po chwili utracił możliwość połączenia z usługą pod adresem `172.17.0.3:5432`. Najbardziej prawdopodobny problem dotyczy połączenia z bazą PostgreSQL. Należy sprawdzić, czy kontener bazy danych działa, czy jest gotowy do przyjmowania połączeń oraz czy aplikacja ma poprawnie ustawiony adres hosta i port bazy danych.
