import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../components/styles.css';

// Register.js: Halaman ini menampilkan form pendaftaran pengguna 
// baru yang menggunakan komponen RegisterForm.js. Ketika pengguna 
// berhasil mendaftar, halaman ini akan mengarahkan pengguna ke halaman login.

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/register', {
        username,
        password,
      });
      // Show success message
      alert('Registration successful!');
      // Redirect to login page
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};

export default Register;
