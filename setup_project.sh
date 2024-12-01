#!/bin/bash

# Project Name
PROJECT_NAME="Nextap"

# Create Main Project Directory
mkdir $PROJECT_NAME && cd $PROJECT_NAME

# Create Frontend Structure
mkdir -p frontend/src/{components,pages,assets,hooks,utils,context,services,styles} frontend/public
touch frontend/src/main.tsx frontend/public/index.html frontend/tsconfig.json frontend/.env frontend/vite.config.ts frontend/package.json frontend/README.md

# Create Backend Structure
mkdir -p backend/src/{routes,controllers,models,middlewares,utils,config,blockchain,openapi} backend/tests
touch backend/src/index.ts backend/src/openapi/openapi.yaml backend/tsconfig.json backend/.env backend/package.json backend/README.md

# Create Documentation
mkdir -p docs
touch docs/README.md

# Create Top-Level Files
touch docker-compose.yml .gitignore README.md

# Add Basic Git Ignore
cat <<EOL > .gitignore
node_modules/
dist/
.env
.DS_Store
EOL

echo "Project structure created successfully."

# Provide Next Steps
echo "Next steps:"
echo "1. Navigate to 'frontend' and initialize the frontend using Vite:"
echo "   cd frontend && npm create vite@latest . -- --template react-ts && npm install"
echo "2. Navigate to 'backend' and initialize the backend:"
echo "   cd ../backend && npm init -y && npm install express mongoose dotenv swagger-jsdoc swagger-ui-express typescript ts-node-dev --save"
echo "3. Set up TypeScript configurations in both frontend and backend."
echo "4. Start development!"

echo "Done! 🎉"