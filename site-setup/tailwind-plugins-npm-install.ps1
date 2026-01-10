Write-Host "Installing Tailwind Plugins..."

try {
  # Uncomment those that you want to install
  Write-Output "Plugins" > tailwind-plugins-npm-install.log
  # npm i -D @tailwindcss/aspect-ratio >> tailwind-plugins-npm-install.log
  # npm i -D @tailwindcss/container-queries >> tailwind-plugins-npm-install.log
  npm i -D @tailwindcss/typography >> tailwind-plugins-npm-install.log
}
catch {
  Write-Host "Failed to install one or more plugins.  Exiting..."
  Write-Host $_.Exception.Message
  exit 1
}

Write-Host "Plugins installed successfully."
Write-Host "You can view the log at tailwind-plugins-npm-install.log"