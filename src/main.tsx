import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.scss';
import App from './App.tsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);
