
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex flex-col justify-end min-h-[90vh] p-6 pb-8 bg-[#F7F9F8]">
      <h1 className="text-3xl font-bold mb-2">Welcome to PopX</h1>
      <p className="text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <Link to="/register">
        <button className="primary-button mb-4">
          Create Account
        </button>
      </Link>

      <Link to="/login">
        <button className="secondary-button">
          Already Registered? Login
        </button>
      </Link>
    </div>

  );
};

export default Welcome;
