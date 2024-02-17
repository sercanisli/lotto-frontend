import React from 'react'
import '../styles/login.css';
import { useFetchAuthenticationQuery } from '../store/apis/authenticationApi';
import { useState } from 'react';


function Login() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  const handleClick = () => {
    const user = {
      username:name, 
      password:password
    }
    const {data, isError, isFetching} = useFetchAuthenticationQuery(user);
  } 

  
  console.log(data);

  if(!data)
  {
    return (
      <div className="login-container">
        <form className="login-form" action="#" method="post">
          <h2>Giriş Yap</h2>
          <input type="text" name="username" placeholder="Kullanıcı Adı" required value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="password" name="password" placeholder="Şifre" required value={password} onChange={(e) => setPassword(e.target.value)}/>
          <div className='submitGroups'>
            <button type="submit" onClick={handleClick}>Giriş Yap</button>
            <p>Hesabınız yok mu? <a href="/signin">Hesap Oluştur</a></p>
          </div>
        </form>
      </div>
    )
  }
  
  return (
    <div className="login-container">
      <form className="login-form" action="#" method="post">
        <h2>Giriş Yap</h2>
        <input type="text" name="username" placeholder="Kullanıcı Adı" required value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="password" name="password" placeholder="Şifre" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <div className='submitGroups'>
          <button type="submit" onClick={handleClick}>Giriş Yap</button>
          <p>Hesabınız yok mu? <a href="/signin">Hesap Oluştur</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login