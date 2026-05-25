# Zadanie 16

## Pliki

- `backup-db.sh` - oryginalny skrypt Bash
- `backup-db.ps1` - równoważny skrypt PowerShell dla Windows

## Główne różnice między Bash i PowerShell w tym przykładzie

### Zmienne

W Bash zmienne zapisuje się bez znaku `$` przy przypisaniu:

```bash
DB_NAME="app_database"
```

W PowerShell znak `$` jest częścią nazwy zmiennej także przy przypisaniu:

```powershell
$DbName = "app_database"
```

### Data i formatowanie

W Bash użyto polecenia `date`:

```bash
DATE=$(date +%Y%m%d_%H%M%S)
```

W PowerShell użyto polecenia `Get-Date`:

```powershell
$Date = Get-Date -Format "yyyyMMdd_HHmmss"
```

### Ścieżki plików

W Bash użyto ścieżki typowej dla systemów Linux:

```bash
/var/backups/db
```

W PowerShell użyto ścieżki typowej dla Windows:

```powershell
C:\Backups\db
```

Dodatkowo w PowerShell do bezpiecznego łączenia ścieżek użyto `Join-Path`.

### Sprawdzanie katalogu

W Bash katalog sprawdzany jest przez:

```bash
if [ ! -d "$BACKUP_DIR" ]; then
```

W PowerShell odpowiednikiem jest:

```powershell
if (-not (Test-Path $BackupDir)) {
```

Do utworzenia katalogu Bash używa `mkdir -p`, a PowerShell używa `New-Item -ItemType Directory -Force`.

### Wypisywanie komunikatów

W Bash użyto:

```bash
echo "Komunikat"
```

W PowerShell użyto:

```powershell
Write-Host "Komunikat"
```

### Obsługa błędów

W Bash po wykonaniu polecenia sprawdzany jest kod wyjścia przez `$?`:

```bash
if [ $? -eq 0 ]; then
```

W PowerShell dla zewnętrznych programów, takich jak `mysqldump`, można sprawdzić `$LASTEXITCODE`. W skrypcie PowerShell użyto też bloku `try/catch/finally`, który pozwala czytelniej obsłużyć błąd i posprzątać plik tymczasowy.

### Kompresja

W Bash kompresja jest bardzo prosta, bo wynik `mysqldump` jest przekazywany potokiem do `gzip`:

```bash
mysqldump -u root -p "$DB_NAME" | gzip > "$FILENAME"
```

W PowerShell na Windows nie zawsze dostępne jest polecenie `gzip`, dlatego użyto klas .NET:

```powershell
[System.IO.Compression.GzipStream]
```

Skrypt PowerShell najpierw zapisuje wynik `mysqldump` do pliku tymczasowego, a potem kompresuje go do pliku `.sql.gz`.

## Wniosek

Bash jest bardzo wygodny do prostego łączenia poleceń systemowych za pomocą potoków. PowerShell ma bardziej rozbudowaną składnię, ale daje łatwy dostęp do obiektów, cmdletów i klas .NET, co jest przydatne w środowisku Windows.
