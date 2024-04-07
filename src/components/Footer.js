import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footerLinks'>
        <Link to="/" className='footerLink'>
          Ana Sayfa
        </Link>
        <Link to="/sayisalloto" className='footerLink'>
          Sayısal Loto
        </Link>
        <Link to="/superloto" className='footerLink'>
          Super Loto
        </Link>
        <Link to="/onnumara" className='footerLink'>
          On Numara
        </Link>
        <Link to="/sanstopu" className='footerLink'>
          Şans Topu
        </Link>
        <Link to="/iletisim" className='footerLink'>
          İletişim
        </Link>
        <Link to="/hakkimizda" className='footerLink'>
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
