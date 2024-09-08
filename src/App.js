import React from 'react'
import './App.css';
import HomePage from './Componets/Home';
import Navbar from './Componets/Navbar';


// https://demo.artureanec.com/themes/transx-new/intro.html
function App() {
  return (
    <>
     <div className='navbar bg-none p-0'>
        <Navbar className="z-[9999]" />
      </div>
      <HomePage />
    </>
  );
}

export default App;
