import React from 'react'
import '../styles/login.css';

function Login() {

  
  return (
    <div className="login-container">
      <form className="login-form" action="#" method="post">
        <h2>Giriş Yap</h2>
        <input type="text" name="username" placeholder="Kullanıcı Adı" required />
        <input type="password" name="password" placeholder="Şifre" required />
        <div className='submitGroups'>
          <button type="submit">Giriş Yap</button>
          <p>Hesabınız yok mu? <a href="/signin">Hesap Oluştur</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login