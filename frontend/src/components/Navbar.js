import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

// Komponen ini menampilkan navigasi untuk menuju halaman beranda, daftar produk, dan tentang kami.

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Hapus token dari localStorage
    navigate("/login"); // Redirect ke halaman login setelah logout
    window.location.reload(); // Memuat ulang halaman setelah logout
  };
  return (
    <nav className="nabar">
      <div className="navbar-brand">
        <span className="brand-text">Toko Donat</span> <span className="highlight-text">Alvino</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link onClick={handleLogout}>Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;