param(
    [string]$RepoPath = 'C:\Users\Шаиг\İnfo systems\portfolio'
)

function Write-Ok($msg) { Write-Host "[OK] $msg" -ForegroundColor Green }
function Write-Err($msg) { Write-Host "[ERROR] $msg" -ForegroundColor Red }
function Write-Info($msg) { Write-Host "[..] $msg" -ForegroundColor Cyan }

Write-Info "Using repo path: $RepoPath"

# Check for git
$gitCmd = Get-Command git -ErrorAction SilentlyContinue
if ($gitCmd) {
    Write-Ok "Git is already installed: $($gitCmd.Source)"
} else {
    Write-Info "Git not found. Attempting to install..."

    # Try winget first
    $winget = Get-Command winget -ErrorAction SilentlyContinue
    if ($winget) {
        Write-Info "Found winget. Installing Git via winget (may prompt for approval)..."
        Start-Process -FilePath winget -ArgumentList "install --id Git.Git -e --source winget" -NoNewWindow -Wait
    } else {
        # Try chocolatey
        $choco = Get-Command choco -ErrorAction SilentlyContinue
        if ($choco) {
            Write-Info "Found Chocolatey. Installing Git via choco..."
            Start-Process -FilePath choco -ArgumentList "install git -y" -NoNewWindow -Wait
        } else {
            Write-Err "No package manager found. Please download and run the installer:"
            Write-Host "https://git-scm.com/download/win"
            Write-Host "Then re-run this script after installation."
            exit 1
        }
    }

    # Re-check git
    Start-Sleep -Seconds 2
    $gitCmd = Get-Command git -ErrorAction SilentlyContinue
    if ($gitCmd) {
        Write-Ok "Git installed: $($gitCmd.Source)"
    } else {
        Write-Err "Git was not detected after install. You may need to restart PowerShell or add Git to PATH."
        Write-Host "If Git installed to 'C:\Program Files\Git', run:" 
        Write-Host "setx PATH `"$env:PATH;C:\Program Files\Git\cmd`""
        Write-Host "Then close and reopen PowerShell and re-run this script."
        exit 1
    }
}

# Show version
git --version

# Ensure user.name and user.email are set
$userName = git config --global user.name
$userEmail = git config --global user.email

if ([string]::IsNullOrWhiteSpace($userName)) {
    $userNameInput = Read-Host "Enter your Git user.name (e.g. 'Your Name')"
    if (-not [string]::IsNullOrWhiteSpace($userNameInput)) {
        git config --global user.name "$userNameInput"
        Write-Ok "Set global user.name to '$userNameInput'"
    } else {
        Write-Info "Skipping setting user.name"
    }
} else {
    Write-Ok "Global user.name already set: $userName"
}

if ([string]::IsNullOrWhiteSpace($userEmail)) {
    $userEmailInput = Read-Host "Enter your Git user.email (e.g. 'you@example.com')"
    if (-not [string]::IsNullOrWhiteSpace($userEmailInput)) {
        git config --global user.email "$userEmailInput"
        Write-Ok "Set global user.email to '$userEmailInput'"
    } else {
        Write-Info "Skipping setting user.email"
    }
} else {
    Write-Ok "Global user.email already set: $userEmail"
}

# Initialize repo, commit
if (-Not (Test-Path (Join-Path $RepoPath ".git"))) {
    Write-Info "Initializing git repository in $RepoPath"
    Push-Location $RepoPath
    git init
    git add .
    git commit -m "Initial portfolio commit" 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Ok "Committed files"
    } else {
        Write-Info "No changes to commit or commit failed; continuing"
    }
    Pop-Location
} else {
    Write-Ok "Repository already initialized at $RepoPath"
}

# Ask for remote URL and attempt push
$remoteUrl = Read-Host "Enter remote URL to add as 'origin' (leave blank to skip pushing)"
if (-not [string]::IsNullOrWhiteSpace($remoteUrl)) {
    Push-Location $RepoPath
    # If origin exists, show and confirm replacement
    $origin = git remote get-url origin 2>$null
    if ($origin) {
        Write-Info "Existing origin: $origin"
        $replace = Read-Host "Replace existing origin? (y/N)"
        if ($replace -match '^[Yy]') {
            git remote remove origin
            git remote add origin $remoteUrl
            Write-Ok "Updated origin to $remoteUrl"
        } else {
            Write-Info "Keeping existing origin"
        }
    } else {
        git remote add origin $remoteUrl
        Write-Ok "Added origin $remoteUrl"
    }

    # Ensure branch name main
    git branch -M main 2>$null

    Write-Info "Attempting to push to origin main (you may be prompted for credentials or PAT)..."
    git push -u origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Ok "Push successful"
    } else {
        Write-Err "Push failed. If using HTTPS, use a Personal Access Token (PAT); if using SSH, ensure your key is added to GitHub."
        Write-Host "For HTTPS: create PAT at https://github.com/settings/tokens with 'repo' scope and use it as the password when prompted."
        Write-Host "For SSH: generate key with `ssh-keygen -t ed25519 -C 'you@example.com'`, add the content of ~/.ssh/id_ed25519.pub to GitHub Settings → SSH and GPG keys."
    }
    Pop-Location
} else {
    Write-Info "Skipping remote add/push step"
}

Write-Ok "Script finished."
