
import React, { useState } from 'react';

const LoginContainer = () => 
{
  var loginName;
    var loginPassword;

    const [message,setMessage] = useState('');

    const doLogin = async event => 
    {
        event.preventDefault();

        var obj = {username:loginName.value,password:loginPassword.value};
        var js = JSON.stringify(obj);

        try
        {    
            const response = await fetch('http://localhost:5000/api/login',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if( res.id <= 0 )
            {
                setMessage('User/Password combination incorrect');
            }
            else
            {
                var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
                localStorage.setItem('user_data', JSON.stringify(user));

                setMessage('');
                window.location.href = '/cards';
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    
    };
  return (
    
    // flex flex-col container mx-auto bg-gray-200 border-solid border-black 
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <div className = "flex-col justify-center items-center">
        <div className='m-5'>
          <p className='text-lg font-medium'>Username</p>
          <input className = 'border rounded border-black w-64 h-8' type = 'text' placeholder='Enter Login' ref={(c) => loginName = c}/>
        </div>
        <div className='m-5'>
          <p className='text-lg font-medium'>Password</p>
          <input className = 'border rounded border-black w-64 h-8' type = 'password' placeholder='Enter Password' ref={(c) => loginPassword = c}/>
        </div>
        <div className='m-5'>
          <button className = 'border rounded-full bg-blue-500 text-white w-36 h-10 font-medium' type = 'button'>Login</button>
        </div>
        <div className='m-5'>
          <button className = 'border rounded-full bg-green-500 text-white w-36 h-10 font-medium' type = 'button' onClick={doLogin}>Register</button>
        </div>
        
      </div>
         
          
          
    </div>
  );
}

export default LoginContainer;