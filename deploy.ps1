# Define paths
$projectPath = "D:\MSSPL_Company\MSSPL_Official_Websites\Official_Website"
$buildOutputPath = $env:BUILD_OUTPUT_PATH
$iisServerPath = $env:IIS_DEPLOY_PATH

# Step 1: Navigate to the project directory
Write-Output "Navigating to project directory: $projectPath"
if (!(Test-Path $projectPath)) {
    Write-Error "Project path does not exist: $projectPath"
    exit 1
}
cd $projectPath

# Step 2: Pull the latest changes from GitHub
Write-Output "Pulling latest changes from GitHub..."
git pull origin main
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to pull the latest changes from GitHub. Exiting script."
    exit 1
}

# Step 3: Install dependencies
Write-Output "Installing project dependencies..."
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to install dependencies. Exiting script."
    exit 1
}

# Step 4: Build the project
Write-Output "Building the project..."
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Error "Build failed. Exiting script."
    exit 1
}

# Step 5: Deploy the built files to IIS server
if (!(Test-Path $buildOutputPath)) {
    Write-Error "Build output path does not exist: $buildOutputPath"
    exit 1
}
if (!(Test-Path $iisServerPath)) {
    Write-Output "IIS server directory does not exist. Creating directory: $iisServerPath"
    New-Item -ItemType Directory -Path $iisServerPath
}

Write-Output "Clearing existing files in IIS server directory: $iisServerPath"
Get-ChildItem -Path $iisServerPath -Recurse | Remove-Item -Recurse -Force

Write-Output "Copying files from $buildOutputPath to $iisServerPath..."
Copy-Item -Path "$buildOutputPath\*" -Destination $iisServerPath -Recurse -Force
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to copy built files to IIS server directory. Exiting script."
    exit 1
}

# Step 6: Restart IIS (Optional)
Write-Output "Restarting IIS server to apply changes..."
iisreset
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to restart IIS. Please check IIS settings."
    exit 1
}

Write-Output "Deployment completed successfully!"
