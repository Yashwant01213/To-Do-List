import React,{useState} from "react";


const Button1 = () => {
   const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');



const handleSignIn = () => {
    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    if (!password.match(passwordRegex)) {
      setError('Password must contain at least 1 uppercase letter, 1 special character, and 1 numeric value.');
      return;
    }

    // Perform sign-in logic here
    // For simplicity, let's just log the credentials for now
    console.log('Username:', username);
    console.log('Password:', password);

    // Clear fields and error message
    setUsername('');
    setPassword('');
    setError('');
  };

  const handleGoogleSignIn = () => {
    // Perform Google sign-in logic using appropriate API call
    console.log('Signing in with Google...');
  };

  const handleFacebookSignIn = () => {
    // Perform Facebook sign-in logic using appropriate API call
    console.log('Signing in with Facebook...');
  };
  return(
  <>
  {error && <p style={{ color: 'red' }}>{error}</p>}


  <button class="bg-yellow-400 hover:bg-yellow-200 w-full rounded-md" onClick={handleSignIn}>Sign In</button>
  <div class="flex flex-row ">
    <hr class="w-1/2 border border-slate-300 translate-y-4"/><p class="text-center translate-y-1"> Or </p><hr class='w-1/2 border border-slate-300 translate-y-4'/>
    </div>
 <div class="flex flex-row  p-2 gap-y-px gap-x-2">
    <button class="bg-slate-400 hover:bg-slate-200 pr-0.5 rounded-md w-1/2 text-xs text-center" onClick={handleGoogleSignIn}> Google</button>
    <button  class="bg-slate-400 hover:bg-slate-200 pr-0.5 rounded-md w-1/2 text-xs text-center" onClick={handleFacebookSignIn}> Facebook</button>
  </div>
  </>
  );
 }
 
export default Button1;