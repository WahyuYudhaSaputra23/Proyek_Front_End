import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './pages/Login';
import Register from './pages/Register';
import './components/styles.css';
import './App.css';

// App.js merupakan komponen utama aplikasi. Di dalamnya, digunakan BrowserRouter dari react-router-dom untuk menangani rute.
// Komponen Navbar ditempatkan di atas komponen Routes untuk menampilkan navigasi di setiap halaman.
// Routes digunakan untuk menentukan rute dan komponen yang akan ditampilkan pada setiap rute.
// Terdapat pengecekan isLoggedIn yang menentukan tampilan yang akan ditampilkan berdasarkan status login pengguna. Jika pengguna sudah login, maka komponen ProductList, AddProduct, EditProduct, Home, dan About akan ditampilkan. Jika pengguna belum login, maka komponen Login dan Register akan ditampilkan.
// Ketika pengguna berhasil login, token JWT yang diterima akan disimpan di localStorage dan status login akan diubah menjadi true. Ketika pengguna melakukan logout, token akan dihapus dari localStorage dan status login akan diubah menjadi false.
// Dalam komponen Login, digunakan useNavigate untuk melakukan navigasi ke halaman beranda setelah login berhasil.

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <>
                  <Navbar onLogout={handleLogout} />
                  <ProductList />
                </>
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
          <Route
            path="/add"
            element={
              isLoggedIn ? (
                <>
                  <Navbar />
                  <AddProduct />
                </>
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
          <Route
            path="/edit/:id"
            element={
              isLoggedIn ? (
                <>
                  <Navbar />
                  <EditProduct />
                </>
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <>
                  <Navbar />
                  <Home />
                </>
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
          <Route
            path="/about"
            element={
              isLoggedIn ? (
                <>
                  <Navbar />
                  <About />
                </>
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace={true} />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
          <Route
            path="/register"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace={true} />
              ) : (
                <Register setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
