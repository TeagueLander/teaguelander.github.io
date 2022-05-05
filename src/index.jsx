import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import './styles/imports.scss';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(<App />);
