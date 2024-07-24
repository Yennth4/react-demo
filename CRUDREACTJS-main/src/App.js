import React from 'react';
import Header from './components/hender/header';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <div className='App-container'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='body'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
