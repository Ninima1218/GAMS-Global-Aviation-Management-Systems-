import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { AuthProvider } from './contexts/AuthContext'
import { HRProvider } from './contexts/HRContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <HRProvider>
        <App />
      </HRProvider>
    </AuthProvider>
  </React.StrictMode>,
) 