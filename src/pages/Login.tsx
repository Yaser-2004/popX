
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate and authenticate here
    navigate('/account');
  };

  return (
    <div className="p-6 bg-[#F7F9F8]">
      <h1 className="text-3xl font-bold mb-2">Signin to your PopX account</h1>
      <p className="text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <form onSubmit={handleSubmit}>
        <div className='relative'>
          <label className="bg-[#F7F9F8] w-fit pl-1 pr-2 absolute z-10 left-4 -top-2 text-[#A972F8] font-bold text-xs">Email Address</label>
          <input 
            type="email" 
            placeholder="Enter email address"
            className="border bg-[#F7F9F8] border-gray-300 w-full h-10 pl-3 rounded-md mb-4" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='relative'>
          <label className="bg-[#F7F9F8] w-fit pl-1 pr-2 absolute z-10 left-4 -top-2 text-[#A972F8] font-bold text-xs">Password</label>
          <input 
            type="password" 
            placeholder="Enter password"
            className="border bg-[#F7F9F8] border-gray-300 w-full h-10 pl-3 rounded-md mb-4" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button 
          type="submit" 
          className={`w-full bg-gray-400 ${email && password ? 'bg-purple-600' : 'disabled'} transition-all duration-200 text-white py-3 rounded-md font-medium mt-4`}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
