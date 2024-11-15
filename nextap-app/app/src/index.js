import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import './styles/global.css';  // Global CSS
import App from './App';

// Get the root DOM element
const rootElement = document.getElementById('root');

// Check if the root element exists
if (rootElement) {
  // Create the root and render the app
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}