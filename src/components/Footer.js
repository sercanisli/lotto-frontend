import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footerLinks'>
        <Link to="/">
          Ana Sayfa
        </Link>
        <Link to="/sayisalloto">
          Sayısal Loto
        </Link>
        <Link to="/superloto">
          Super Loto
        </Link>
        <Link to="/onnumara">
          On Numara
        </Link>
        <Link to="/sanstopu">
          Şans Topu
        </Link>
        <Link to="/iletisim">
          İletişim
        </Link>
        <Link to="/hakkimizda">
          Hakkımızda
        </Link>
      </div>
      <div className='footerDescription'>
        <p>
          Tüm hakları saklıdır | Lotocum
        </p>
      </div>
    </div>
  )
}

export default Footer
