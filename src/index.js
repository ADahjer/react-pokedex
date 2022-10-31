import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles.css';
import PokemonInfo from './pages/PokemonInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/pokemon/:id',
    element: <PokemonInfo />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>
);