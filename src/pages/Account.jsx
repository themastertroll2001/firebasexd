import React  from 'react';
import { UserAuth } from '../context/AuthContext';
const Account = () => {

  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
   
  };

  return (
    <div className='w-[300px] m-auto'>
      <h1 className='text-center text-2xl font-bold '>Cuenta</h1>
      <div>
        <p>Bienvenido, {user?.displayName}</p>
      </div>    
      
     
       
    </div>
  );
};

export default Account;
