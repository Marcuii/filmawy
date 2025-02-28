import { useState } from 'react';
import { Link } from 'react-router-dom'
import storageEncryption from '../services/enc';

const Login = ({setLoggedIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fault, setFault] = useState(false);

  const handleLogin = () => {
    const storedEmail = localStorage.getDecryptedItem('email');
    const storedPassword = localStorage.getDecryptedItem('password');
    if (storedEmail === email && storedPassword === password) {
      localStorage.setItem('in', true);
      setLoggedIn(true);
    } else {
      setFault(true);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 gap-3">
      <h1 className="text-3xl mb-6">Sign In</h1>
      <input
        type="email"
        placeholder="Email"
        className="p-2 mb-4 w-full max-w-md border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 mb-4 w-full max-w-md border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-neutral text-primary-content p-2 rounded w-full max-w-md"
        onClick={handleLogin}
      >
        Sign In
      </button>
      <h1>Don't have an account? <Link to="/signup" className='hover:text-neutral'>Sign Up</Link></h1>
      {fault && <p className="text-red-500">Invalid email or password</p>}
    </div>
  );
};

export default Login;