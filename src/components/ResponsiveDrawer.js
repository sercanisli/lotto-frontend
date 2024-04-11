import * as React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import SayisalLoto from './SayisalLoto';

function ResponsiveDrawer() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/admin-sayisalloto">Sayısal Loto</Link>
          </li>
          {/* Diğer menü butonları buraya eklenebilir */}
        </ul>
      </nav>
      <Routes>
        <Route path="/admin-sayisalloto" element={<SayisalLoto />} />
        {/* Diğer Route bileşenleri buraya eklenebilir */}
      </Routes>
    </div>
  );
}

export default ResponsiveDrawer;
