import React from 'react'
import './App.css';
import HomePage from './Componets/Home';
import Navbar from './Componets/Navbar';


function App() {
  return (
    <>
     <div className='navbar bg-none p-0'>
        <Navbar/>
      </div>
      <HomePage />
    </>
  );
}

export default App;
