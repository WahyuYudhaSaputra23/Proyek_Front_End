import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

// Komponen ini digunakan untuk form login. 
// Mengelola input untuk username dan password.

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        username,
        password,
      });
      // Save token to local storage
      localStorage.setItem('token', response.data.token);
      // Redirect to homepage
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/register', {
        username,
        password,
      });
      // Redirect to login page after successful registration
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <Link to="/register">Register</Link>
      </p>
      <p>
        If you have already registered, please{' '}
        <button onClick={handleRegister}>Register</button>
        {' '}first.
      </p>
    </div>
  );
};

export default LoginForm;
