import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';

// Configurar meta tag viewport para responsividade (se não existir no HTML)
const setResponsiveViewport = () => {
  let viewport = document.querySelector('meta[name="viewport"]');
  
  if (!viewport) {
    viewport = document.createElement('meta');
    viewport.setAttribute('name', 'viewport');
    document.head.appendChild(viewport);
  }
  
  viewport.setAttribute(
    'content',
    'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes'
  );
};

// Adicionar meta tags essenciais para responsividade e PWA
const setupMetaTags = () => {
  setResponsiveViewport();
  
  // Meta tag para theme color (mobile)
  let themeColor = document.querySelector('meta[name="theme-color"]');
  if (!themeColor) {
    themeColor = document.createElement('meta');
    themeColor.setAttribute('name', 'theme-color');
    themeColor.setAttribute('content', '#0ea5e9');
    document.head.appendChild(themeColor);
  }
  
  // Meta tag para Apple mobile web app
  let appleMobileCapable = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
  if (!appleMobileCapable) {
    appleMobileCapable = document.createElement('meta');
    appleMobileCapable.setAttribute('name', 'apple-mobile-web-app-capable');
    appleMobileCapable.setAttribute('content', 'yes');
    document.head.appendChild(appleMobileCapable);
  }
  
  // Status bar style para iOS
  let appleStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  if (!appleStatusBar) {
    appleStatusBar = document.createElement('meta');
    appleStatusBar.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
    appleStatusBar.setAttribute('content', 'default');
    document.head.appendChild(appleStatusBar);
  }
};

// Executar configurações
setupMetaTags();

// Renderizar a aplicação
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);