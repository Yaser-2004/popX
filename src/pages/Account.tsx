
import React from 'react';
import { MdCameraAlt } from "react-icons/md";

const Account = () => {
  return (
    <div className='min-h-[667px] bg-[#F7F9F8] relative'>
      <div className="bg-white p-4 border-b">
        <h1 className="text-xl text-gray-700 font-medium">Account Settings</h1>
      </div>
      
      <div className="p-4">
        <div className="flex items-start">
          <div className="relative mr-4">
            <img 
              src="/assets/woman.jpg"
              alt="Profile" 
              className="w-16 h-16 rounded-full object-fill"
            />
            <div className="absolute bottom-1 -right-1 bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
              <MdCameraAlt className='text-sm ml-[1px] mt-[1px]'/>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-base">Marry Doe</h2>
            <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 text-gray-600 border-b border-dashed text-xs"
        style={{
          borderImageSlice: 1,
          borderImageSource:
            "repeating-linear-gradient(90deg,rgb(203, 206, 212) 0 5px, transparent 5px 10px)",
        }}
      >
        <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
      </div>

      <div className="p-4 text-gray-600 border-b border-dashed absolute w-full z-20 top-40 bottom-10"
        style={{
          borderImageSlice: 1,
          borderImageSource:
            "repeating-linear-gradient(90deg,rgb(203, 206, 212) 0 5px, transparent 5px 10px)",
        }}
      ></div>
    </div>
  );
};

export default Account;
