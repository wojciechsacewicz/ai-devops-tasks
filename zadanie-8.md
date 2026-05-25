# Zadanie 8

## Komunikat bledu

```text
ERROR: for app  Cannot start service app: driver failed programming external connectivity on endpoint app (172.18.0.2): Error starting userland proxy: listen tcp4 0.0.0.0:3000: bind: address already in use
```

## Co oznacza ten blad?

Ten blad oznacza, ze Docker probuje uruchomic kontener i podlaczyc jego port do portu `3000` na komputerze hosta, ale port `3000` jest juz zajety przez inny proces.

Najwazniejsza czesc komunikatu to:

```text
listen tcp4 0.0.0.0:3000: bind: address already in use
```

Oznacza to, ze system nie moze nasluchiwac na porcie `3000`, bo cos juz z niego korzysta. Moze to byc inny kontener Docker, lokalnie uruchomiona aplikacja Node.js, serwer developerski albo inna usluga.

## Jak sprawdzic, co zajmuje port?

Mozna uzyc jednego z ponizszych polecen:

```bash
sudo lsof -i :3000
```

albo:

```bash
sudo netstat -tulpn | grep 3000
```

albo:

```bash
sudo ss -tulpn | grep 3000
```

Jesli port zajmuje inny kontener Docker, mozna sprawdzic dzialajace kontenery:

```bash
docker ps
```

## Sugerowane rozwiazania

### 1. Zatrzymanie procesu, ktory zajmuje port

Jesli port `3000` zajmuje lokalna aplikacja, mozna ja zatrzymac. Po znalezieniu identyfikatora procesu `PID` mozna uzyc:

```bash
kill <PID>
```

Jesli proces nie chce sie zatrzymac:

```bash
kill -9 <PID>
```

### 2. Zatrzymanie innego kontenera Docker

Jesli port zajmuje inny kontener, najpierw znajdz jego nazwe lub identyfikator:

```bash
docker ps
```

Nastepnie zatrzymaj kontener:

```bash
docker stop <container_id_lub_nazwa>
```

### 3. Zmiana mapowania portow

Jesli port `3000` musi pozostac zajety, mozna uruchomic kontener na innym porcie hosta, na przyklad `3001`.

Przyklad dla `docker run`:

```bash
docker run -p 3001:3000 moja-aplikacja
```

Oznacza to, ze aplikacja nadal dziala w kontenerze na porcie `3000`, ale na komputerze bedzie dostepna pod adresem:

```text
http://localhost:3001
```

Przyklad dla `docker-compose.yml`:

```yaml
services:
  app:
    ports:
      - "3001:3000"
```

### 4. Restart Dockera

Jesli port wyglada na wolny, ale Docker nadal zglasza problem, mozna sprobowac zrestartowac usluge Docker:

```bash
sudo systemctl restart docker
```

## Podsumowanie

Blad wynika z konfliktu portow. Docker chce uzyc portu `3000` na hoscie, ale ten port jest juz zajety. Najczestsze rozwiazania to zatrzymanie procesu korzystajacego z portu, zatrzymanie innego kontenera albo zmiana mapowania portu, na przyklad z `3000:3000` na `3001:3000`.
