import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Questions from './Questions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Questions' element={<Questions />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

