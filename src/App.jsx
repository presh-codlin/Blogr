import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {

  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col items-center relative">
      <NavBar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App;
