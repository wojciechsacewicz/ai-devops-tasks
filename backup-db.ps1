# Prosty skrypt do backupu bazy danych

$DbName = "app_database"
$BackupDir = "C:\Backups\db"
$Date = Get-Date -Format "yyyyMMdd_HHmmss"
$Filename = Join-Path $BackupDir "$DbName`_$Date.sql.gz"

# Sprawdz czy katalog istnieje
if (-not (Test-Path $BackupDir)) {
    New-Item -ItemType Directory -Path $BackupDir -Force | Out-Null
    Write-Host "Utworzono katalog $BackupDir"
}

# Wykonaj backup
Write-Host "Rozpoczynam backup bazy $DbName..."

$TempSqlFile = [System.IO.Path]::GetTempFileName()

try {
    & mysqldump -u root -p $DbName | Out-File -FilePath $TempSqlFile -Encoding utf8

    if ($LASTEXITCODE -ne 0) {
        throw "Blad podczas wykonywania mysqldump."
    }

    $InputStream = [System.IO.File]::OpenRead($TempSqlFile)
    $OutputStream = [System.IO.File]::Create($Filename)
    $GzipStream = [System.IO.Compression.GzipStream]::new(
        $OutputStream,
        [System.IO.Compression.CompressionMode]::Compress
    )

    try {
        $InputStream.CopyTo($GzipStream)
    }
    finally {
        $GzipStream.Dispose()
        $OutputStream.Dispose()
        $InputStream.Dispose()
    }

    Write-Host "Backup zakonczony sukcesem: $Filename"
}
catch {
    Write-Host "Blad podczas wykonywania backupu!"
    exit 1
}
finally {
    if (Test-Path $TempSqlFile) {
        Remove-Item $TempSqlFile
    }
}
