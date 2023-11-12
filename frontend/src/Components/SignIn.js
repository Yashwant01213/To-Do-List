import React, { useState } from 'react';
import Button1 from './Button1';
import Photo1 from '../Images/SignIn.jpeg'

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (

    <div class="flex flex-row  w-screen h-screen ">
      <div class="basis-1/2 flex justify-center items-center object-fill">
      <img src= {Photo1} alt="SignIn"  class="w-full h-full p-7 m-5"/>
      </div>
      <div class=" w-1/2 flex flex-col justify-center items-center border  border-slate-300 rounded-xl p-5 ">
      <h1 class="text-3xl text-left">Sign In</h1>
      <div class="w-1/2 ">
        <input
          class="w-full rounded-md"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
     
      <div>
  
            <div style={{ position: 'relative' }} class="flex flex-row">
              <input
                class="w-full rounded-md"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                style={{
                  //position: 'relative',
                
                  transform: 'translateY(10%)',
                  cursor: 'pointer',
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </i>
            </div>
            
          </div>
          <div>
            <Button1/>
            <p class="text-center">Don't have an account? <a href='' class='text-yellow-300'>Signup</a></p>
            </div>
            
         </div>  
         </div> 
    </div>
  );
};

export default SignIn;
