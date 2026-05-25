# Zadanie 7

## Skrypt `check_docker.sh`

```bash
#!/bin/bash

if systemctl is-active --quiet docker; then
    echo "Docker działa."
else
    echo "Docker nie działa. Próba uruchomienia..."
    sudo systemctl start docker

    if systemctl is-active --quiet docker; then
        echo "Docker został uruchomiony."
    else
        echo "Nie udało się uruchomić Dockera."
        exit 1
    fi
fi
```

## Wyjaśnienie linia po linii

```bash
#!/bin/bash
```

Ta linia mówi systemowi, że skrypt ma zostać uruchomiony przy pomocy powłoki Bash.

```bash
if systemctl is-active --quiet docker; then
```

Ta linia sprawdza, czy usługa Docker jest aktywna. Polecenie `systemctl is-active docker` sprawdza status usługi, a opcja `--quiet` ukrywa zwykły tekstowy wynik polecenia.

```bash
    echo "Docker działa."
```

Jeśli Docker działa, skrypt wypisuje komunikat `Docker działa.`.

```bash
else
```

Ta linia oznacza: jeśli poprzedni warunek nie był prawdziwy, wykonaj inną część skryptu.

```bash
    echo "Docker nie działa. Próba uruchomienia..."
```

Jeśli Docker nie działa, skrypt informuje użytkownika, że spróbuje go uruchomić.

```bash
    sudo systemctl start docker
```

Ta linia próbuje uruchomić usługę Docker. Polecenie `sudo` jest użyte dlatego, że uruchamianie usług systemowych zwykle wymaga uprawnień administratora.

```bash
    if systemctl is-active --quiet docker; then
```

Po próbie uruchomienia skrypt ponownie sprawdza, czy Docker jest już aktywny.

```bash
        echo "Docker został uruchomiony."
```

Jeśli Docker działa po próbie uruchomienia, skrypt wypisuje komunikat o sukcesie.

```bash
    else
```

Ta linia obsługuje sytuację, w której Docker nadal nie działa.

```bash
        echo "Nie udało się uruchomić Dockera."
```

Skrypt informuje użytkownika, że uruchomienie Dockera się nie powiodło.

```bash
        exit 1
```

Ta linia kończy działanie skryptu z kodem błędu `1`. Taki kod oznacza, że skrypt nie zakończył się poprawnie.

```bash
    fi
```

Ta linia kończy wewnętrzny blok `if`, czyli sprawdzenie wykonane po próbie uruchomienia Dockera.

```bash
fi
```

Ta linia kończy zewnętrzny blok `if`, czyli główne sprawdzenie, czy Docker działał od początku.
