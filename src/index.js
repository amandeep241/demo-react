import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'
import HomePage from './components/pages/HomePage';
import Counter from './components/Counter';
import NotFoundPage from './components/pages/NotFoundPage'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ImageGallery from './components/image-gallery/ImageGallery';
import TimerMain from './components/timer/Outer.js';
import Chess from './components/chess/chess.js';

const router = createBrowserRouter([
    {
      path: "/", 
      element: <App/>,
      children: [ 
        {
          path: '/',
          element: <HomePage/>,
          errorElement: <NotFoundPage/>,
        },
        {
          path: '/counter',
          element: <Counter/>
        },
        {
          path: '/image-gallery',
          element: <ImageGallery/>
        },
        {
          path: '/timer',
          element: <TimerMain/>
        },
        {
          path: '/chess',
          element: <Chess/>
        }
      ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
);

// If you want to start measuring performance in your HomePage, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
