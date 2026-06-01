# ============================================================
#  SAUVEGARDE INCREMENTIELLE GLAMS HOTEL
#  - 1ere fois       : ZIP complet (~400 MB, une seule fois)
#  - Fois suivantes  : ZIP des fichiers modifies depuis dernier push
#    (quelques Ko a quelques Mo seulement)
# ============================================================

$projectDir = "C:\Users\DavidKHALFA\OneDrive - IDEAL HOTEL\Glams Hotel\www\Glamshotel_com 2026\glams-hotel"
$backupDir  = "C:\Users\DavidKHALFA\OneDrive - IDEAL HOTEL\Glams Hotel\www\_backups"
$timestamp  = Get-Date -Format "yyyy-MM-dd_HH-mm"
$excludes   = @("node_modules", ".next", ".git", "backup.ps1")

# Assure que le dossier backup existe
if (!(Test-Path $backupDir)) { New-Item -ItemType Directory -Path $backupDir -Force | Out-Null }

Add-Type -AssemblyName System.IO.Compression.FileSystem

# ── Verifie si une sauvegarde complete existe deja ──────────
$fullBackup = Get-ChildItem $backupDir -Filter "glamshotel_FULL_*.zip" | Sort-Object LastWriteTime -Descending | Select-Object -First 1

if (-not $fullBackup) {
    # ── SAUVEGARDE COMPLETE (premiere fois) ──────────────────
    $zipName = "glamshotel_FULL_$timestamp.zip"
    $zipPath = Join-Path $backupDir $zipName
    Write-Host "Premiere sauvegarde — ZIP complet en cours..." -ForegroundColor Cyan

    $files = Get-ChildItem -Path $projectDir -Recurse | Where-Object {
        $rel = $_.FullName.Substring($projectDir.Length + 1)
        $top = $rel.Split("\")[0]
        -not ($excludes -contains $top) -and -not $_.PSIsContainer
    }

    $zip = [System.IO.Compression.ZipFile]::Open($zipPath, 'Create')
    foreach ($file in $files) {
        $entry = $file.FullName.Substring($projectDir.Length + 1)
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $file.FullName, $entry) | Out-Null
    }
    $zip.Dispose()

    $sizeMB = [math]::Round((Get-Item $zipPath).Length / 1MB, 1)
    Write-Host "Sauvegarde complete : $zipName ($sizeMB MB)" -ForegroundColor Green

} else {
    # ── SAUVEGARDE INCREMENTIELLE ────────────────────────────
    $since = $fullBackup.LastWriteTime

    # Fichiers modifies depuis la derniere sauvegarde (complete ou incrementielle)
    $lastAny = Get-ChildItem $backupDir -Filter "glamshotel_*.zip" | Sort-Object LastWriteTime -Descending | Select-Object -First 1
    if ($lastAny) { $since = $lastAny.LastWriteTime }

    $changedFiles = Get-ChildItem -Path $projectDir -Recurse | Where-Object {
        $rel = $_.FullName.Substring($projectDir.Length + 1)
        $top = $rel.Split("\")[0]
        -not ($excludes -contains $top) -and
        -not $_.PSIsContainer -and
        $_.LastWriteTime -gt $since
    }

    if ($changedFiles.Count -eq 0) {
        Write-Host "Aucun fichier modifie depuis la derniere sauvegarde — rien a sauvegarder." -ForegroundColor Yellow
        exit 0
    }

    $zipName = "glamshotel_INCR_$timestamp.zip"
    $zipPath = Join-Path $backupDir $zipName
    Write-Host "$($changedFiles.Count) fichier(s) modifie(s) depuis $($since.ToString('dd/MM/yyyy HH:mm')) — sauvegarde incrementielle..." -ForegroundColor Cyan

    $zip = [System.IO.Compression.ZipFile]::Open($zipPath, 'Create')
    foreach ($file in $changedFiles) {
        $entry = $file.FullName.Substring($projectDir.Length + 1)
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $file.FullName, $entry) | Out-Null
    }
    $zip.Dispose()

    $sizeKB = [math]::Round((Get-Item $zipPath).Length / 1KB, 0)
    Write-Host "Sauvegarde incrementielle : $zipName ($sizeKB KB)" -ForegroundColor Green
}

Write-Host "Emplacement : $backupDir" -ForegroundColor Gray
