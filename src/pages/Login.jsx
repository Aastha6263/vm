import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      // Save token + role
      localStorage.setItem('token', res.data.accessToken);
      localStorage.setItem('role', 'admin'); // 👈 This enables Admin Header

      navigate('/');
      window.location.reload(); // refresh header
    } catch (err) {
      alert('Invalid login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 p-6 border rounded">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border p-2 mb-3"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="w-full border p-2 mb-3"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2"
        >
          Login
        </button>
      </div>
    </div>
  );
}
