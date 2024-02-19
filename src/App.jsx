import React from 'react';
import NavBar from './components/NavBar';
import BdCont from './components/BdCont';

function App() {

  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col items-center relative">
      <NavBar/>
      <BdCont/>
    </div>
  )
}

export default App;
