
import { Link } from 'react-router-dom';
import MobileContainer from '../components/MobileContainer';

const NotFound = () => {
  return (
    <MobileContainer>
      <div className="flex flex-col items-center justify-center h-full p-6">
        <h1 className="text-3xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link to="/" className="text-purple-600 font-medium">
          Go back to home
        </Link>
      </div>
    </MobileContainer>
  );
};

export default NotFound;
