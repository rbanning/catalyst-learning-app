Write-Host "Installing FontAwesome NPM packages..."
Write-Host "This installs the FREE icon packs..."
Write-Host "---"

Write-Host "[core]"
npm i --save @fortawesome/fontawesome-svg-core > fontawesome-npm-install.log
if ($LASTEXITCODE -ne 0) {
  Write-Host "Failed to install core.  Exiting..."
  exit 1
}

# --- pick what you need ---
Write-Host "[icons]"
try {
  npm i --save @fortawesome/free-brands-svg-icons >> fontawesome-npm-install.log

  npm i --save @fortawesome/free-solid-svg-icons  >> fontawesome-npm-install.log
  npm i --save @fortawesome/free-regular-svg-icons  >> fontawesome-npm-install.log
  
} catch {
  Write-Host "Failed to install one or more icons.  Exiting..."
  Write-Host $_.Exception.Message
  exit 1
}

# --- Add the React Component
Write-Host "[component]"
npm i --save @fortawesome/react-fontawesome@latest  >> fontawesome-npm-install.log
if ($LASTEXITCODE -ne 0) {
  Write-Host "Failed to install component.  Exiting..."
  exit 1
}

Write-Host "FontAwesome NPM packages installed successfully."
Write-Host "You can view the log at fontawesome-npm-install.log"