import React from 'react';
import { useNavigate } from 'react-router-dom';

//Komponen ini menampilkan halaman beranda dengan pesan selamat datang.

const Home = () => {
  const navigate = useNavigate();

  // Cek apakah pengguna memiliki token
  const token = localStorage.getItem('token');
  if (!token) {
    // Jika tidak memiliki token, arahkan ke halaman login
    navigate('/login');
    return null;
  }

  return (
    <div className="home">
      <h1>Selamat datang di Toko Donat!</h1>
      <p>Selamat berbelanja donat yang lezat dan menggiurkan.</p>
    </div>
  );
};

export default Home;
