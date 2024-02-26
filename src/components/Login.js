import React, { useEffect } from 'react'
import '../styles/login.css';
import { useLoginUserMutation } from '../store/apis/authenticationApi';
import { useState } from 'react';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'; 


function Login() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const [loginUser, {data, isSuccess, isError, error }] = useLoginUserMutation();

  const user = {
    username:name,
    password:password
  }
  const handleLogin = async () => {
    if(user) {
      await loginUser({user});
    }
    else {
      toast.error("Boş yer kalmamalı");
    }
  };
  
  useEffect(() => {
    if(isSuccess) {
      toast.success("Successfly");
      navigate("/");
    }
  })

  console.log(data);

  return (
    <div className="login-container">
      <form className="login-form" method="post">
        <h2>Giriş Yap</h2>
        <input type="text" name="username" placeholder="Kullanıcı Adı" required value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="password" name="password" placeholder="Şifre" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <div className='submitGroups'>
          <button type="submit" onClick={handleLogin}>Giriş Yap</button>
          <p>Hesabınız yok mu? <a href="/signin">Hesap Oluştur</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login