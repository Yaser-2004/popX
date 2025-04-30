
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? e.target.id : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate and submit to an API
    navigate('/account');
  };

  return (
    <div className="p-6 bg-[#F7F9F8]">
      <h1 className="text-3xl font-bold mb-2 ">Create your PopX account</h1>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className='relative'>
          <label className="bg-[#F7F9F8] w-fit pl-1 pr-2 absolute z-10 left-4 -top-2 text-[#A972F8] font-bold text-xs">Full Name<span className='text-red-600'>*</span></label>
          <input 
            type="text" 
            name="fullName"
            placeholder="Enter full name" 
            className="border bg-[#F7F9F8] border-gray-300 w-full h-10 pl-3 rounded-md mb-4 text-sm" 
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className='relative'>
          <label className="bg-[#F7F9F8] w-fit pl-1 pr-2 absolute z-10 left-4 -top-2 text-[#A972F8] font-bold text-xs">Phone number<span className='text-red-600'>*</span></label>
          <input 
            type="tel" 
            name="phoneNumber"
            placeholder="Enter phone number" 
            className="border bg-[#F7F9F8] border-gray-300 w-full h-10 pl-3 rounded-md mb-4 text-sm" 
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className='relative'>
          <label className="bg-[#F7F9F8] w-fit pl-1 pr-2 absolute z-10 left-4 -top-2 text-[#A972F8] font-bold text-xs">Email address<span className='text-red-600'>*</span></label>
          <input 
            type="email" 
            name="email"
            placeholder="Enter email address" 
            className="border bg-[#F7F9F8] border-gray-300 w-full h-10 pl-3 rounded-md mb-4 text-sm" 
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className='relative'>
          <label className="bg-[#F7F9F8] w-fit pl-1 pr-2 absolute z-10 left-4 -top-2 text-[#A972F8] font-bold text-xs">Password<span className='text-red-600'>*</span></label>
          <input 
            type="password" 
            name="password"
            placeholder="Enter password" 
            className="border bg-[#F7F9F8] border-gray-300 w-full h-10 pl-3 rounded-md mb-4 text-sm" 
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className='relative'>
          <label className="bg-[#F7F9F8] w-fit pl-1 pr-2 absolute z-10 left-4 -top-2 text-[#A972F8] font-bold text-xs">Company name</label>
          <input 
            type="text" 
            name="companyName"
            placeholder="Enter company name"
            className="border bg-[#F7F9F8] border-gray-300 w-full h-10 pl-3 rounded-md mb-4 text-sm" 
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <p className="text-sm mb-3">Are you an Agency?<span className='text-red-600'>*</span></p>
          <div className="flex items-center gap-6">
            <label className="flex items-center">
              <input 
                type="radio" 
                id="yes"
                name="isAgency"
                className="w-5 h-5 text-purple-600" 
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                id="no"
                name="isAgency"
                className="w-5 h-5 text-purple-600" 
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        <button 
          type="submit" 
          className="primary-button mt-32 bottom-6 left-0"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
