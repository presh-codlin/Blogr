import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

function App() {

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col align-center justify-center">
      <NavBar/>
      <Hero/>
    </div>
  )
}

export default App;
