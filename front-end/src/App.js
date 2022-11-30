import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import './App.css';
import Routers from './router/routers';

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
