import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Titulo from './components/Titulo';
import Cargafoto from './components/Cargafoto';
import Imgcuadricula from './components/Imgcuadricula';
import Modelfoto from './components/Modelfoto';


function App() {
    const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className='App'>
      
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Signin' element={<Signin />} />
          <Route
            path='/Account'
            element={
              <Protected>
     <Account />    
     <Titulo/>
      <Cargafoto />  
      <Imgcuadricula setSelectedImg={setSelectedImg} />
    { selectedImg && (
      <Modelfoto selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    )}  
  </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
