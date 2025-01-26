"use client"
import { useState } from 'react';

export default function Login() {
  const [cnic, setCnic] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    alert(`CNIC: ${cnic}\nPassword: ${password}`);
    window.location.href = '/'; // Redirect to the homepage or dashboard after login
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Login</h1>
      </header>

      <main className="login-main">
        <form className="login-form" onSubmit={handleLogin}>
          <label className="login-label">
            CNIC:
            <input
              type="text"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              required
              className="login-input"
            />
          </label>

          <label className="login-label">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
            />
          </label>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </main>

      <footer className="login-footer">
        <p>© 2025 Saylani Microfinance. All rights reserved.</p>
      </footer>
    </div>
  );
}
