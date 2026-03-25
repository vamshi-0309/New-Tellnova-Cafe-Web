import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster 
      position="bottom-right"
      toastOptions={{
        style: {
          background: 'rgba(20, 20, 35, 0.95)',
          color: '#fff',
          border: '1px solid rgba(255, 0, 128, 0.5)',
          backdropFilter: 'blur(10px)',
        },
      }}
    />
  </StrictMode>
);
