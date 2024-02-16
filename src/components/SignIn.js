import React from 'react'
import '../styles/signIn.css';

function SignIn() {
  return (
    <div class="register-container">
        <form class="register-form" action="#" method="post">
            <h2>Kayıt Ol</h2>
            <input type="text" name="username" placeholder="Kullanıcı Adı" required/>
            <input type="email" name="email" placeholder="E-posta" required/>
            <input type="password" name="password" placeholder="Şifre" required/>
            <input type="password" name="confirm-password" placeholder="Şifre Tekrar" required/>
            <button type="submit">Kayıt Ol</button>
        </form>
  </div>
  )
}

export default SignIn