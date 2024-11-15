#!/bin/bash

# Define project name
PROJECT_NAME="nextap-app"

# Create project directory
mkdir $PROJECT_NAME
cd $PROJECT_NAME

# Initialize Git repository
git init

# Create frontend (React) and backend (Node.js) directories
mkdir -p app/public
mkdir -p app/src/assets
mkdir -p app/src/components
mkdir -p app/src/pages
mkdir -p app/src/services
mkdir -p app/src/contexts
mkdir -p app/src/utils
mkdir -p app/src/styles
mkdir -p backend/config
mkdir -p backend/controllers
mkdir -p backend/models
mkdir -p backend/routes
mkdir -p backend/services
mkdir -p backend/utils

# Create frontend files
touch app/public/index.html
touch app/src/App.js
touch app/src/index.js
touch app/src/styles/tailwind.config.js
touch app/src/styles/global.css
touch app/.env
touch app/package.json

# Create backend files
touch backend/config/db.js
touch backend/controllers/userController.js
touch backend/controllers/transactionController.js
touch backend/models/userModel.js
touch backend/models/transactionModel.js
touch backend/routes/userRoutes.js
touch backend/routes/transactionRoutes.js
touch backend/services/cryptoService.js
touch backend/services/nfcService.js
touch backend/utils/jwtUtil.js
touch backend/utils/passwordUtil.js
touch backend/server.js
touch backend/.env
touch backend/package.json

# Initialize frontend (React app)
cat <<EOL > app/package.json
{
  "name": "$PROJECT_NAME",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.0.0",
    "axios": "^1.0.0",
    "tailwindcss": "^3.0.0",
    "postcss": "^8.0.0",
    "autoprefixer": "^10.0.0"
  },
  "devDependencies": {
    "react-scripts": "^5.0.0"
  }
}
EOL

# Initialize backend (Node.js app)
cat <<EOL > backend/package.json
{
  "name": "$PROJECT_NAME-backend",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.10.9",
    "dotenv": "^8.2.0",
    "jsonwebtoken": "^8.5.1",
    "bcryptjs": "^2.4.3",
    "axios": "^1.0.0"
  }
}
EOL

# Create Tailwind CSS configuration for frontend
cat <<EOL > app/src/styles/tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# Create global CSS file for frontend
cat <<EOL > app/src/styles/global.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# Create .env files for both frontend and backend
cat <<EOL > app/.env
REACT_APP_MONGO_URI=<your-mongodb-uri>
REACT_APP_COIN_GECKO_API_KEY=<your-coin-gecko-api-key>
EOL

cat <<EOL > backend/.env
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
EOL

# Install frontend dependencies
cd app
npm install

# Install backend dependencies
cd ../backend
npm install

# Instructions to user
echo "Project setup complete!"
echo "1. Replace <your-mongodb-uri> with your MongoDB connection string in .env"
echo "2. Replace <your-coin-gecko-api-key> with your CoinGecko API key in frontend .env"
echo "3. Replace <your-jwt-secret> with a secret key for JWT in backend .env"
echo "4. Run 'npm start' in the frontend ('app' folder) and backend ('backend' folder) to start the development servers."