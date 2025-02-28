import { useState } from 'react';
import { Link } from 'react-router-dom';
import storageEncryption from '../services/enc';


const Signup = () => {
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fault, setFault] = useState(false);

  const handleSignup = () => {
    if (userName && email && password) {
      localStorage.setItem('name', userName);
      localStorage.setEncryptedItem('email', email);
      localStorage.setEncryptedItem('password', password);
      window.location.href = '/login';
    } else {
      setFault(true);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 gap-3">
      <h1 className="text-3xl mb-6">Sign Up</h1>
      <input
        type="text"
        placeholder="Name"
        className="p-2 mb-4 w-full max-w-md border rounded"
        value={userName}
        onChange={(e) => setName(e.target.value)}
      />
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
        className="bg-accent text-primary-content p-2 rounded w-full max-w-md"
        onClick={handleSignup}
      >
        Sign Up
      </button>
      <h1>Already have an account? <Link to="/login" className='hover:text-accent'>Log in</Link></h1>
      {fault && <p className="text-red-500">Please fill all fields</p>}
    </div>
  );
};

export default Signup;