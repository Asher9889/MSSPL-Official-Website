# # Change to the directory where your app is stored
# cd "D:\MSSPL Company\MSSPL Official Websites\Official Website"

# # Pull the latest changes from GitHub
# git pull origin main

# # Run build command (assuming you have Node.js and npm installed)
# npm install
# npm run build

# # Copy the build folder to the IIS directory
# # Adjust this path according to your IIS configuration
# Copy-Item "D:\MSSPL Company\MSSPL Official Websites\Official Website\dist\*" "C:\IIS_Server\dist" -Recurse -Force

# # Optionally, restart IIS or your website
# iisreset

# New Script




# Define paths
$projectPath = "D:\MSSPL Company\MSSPL Official Websites\Official Website"
$buildOutputPath = "$projectPath\dist"
$iisServerPath = "C:\IIS_Server\dist"

# Use environment variables for paths
$buildOutputPath = $env:BUILD_OUTPUT_PATH
$iisServerPath = $env:IIS_DEPLOY_PATH

# Step 1: Navigate to the project directory
Write-Output "Navigating to project directory: $projectPath"
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
Write-Output "Deploying files to IIS server directory: $iisServerPath"
if (Test-Path $iisServerPath) {
    Remove-Item "$iisServerPath\*" -Recurse -Force
    Write-Output "Cleared existing files in IIS server directory."
} else {
    Write-Output "IIS server directory does not exist. Creating directory: $iisServerPath"
    New-Item -ItemType Directory -Path $iisServerPath
}

Copy-Item "$buildOutputPath\*" $iisServerPath -Recurse -Force
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
