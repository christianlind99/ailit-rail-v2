import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-6 text-6xl font-bold md:text-8xl">404</h1>
      <p className="mb-8 text-lg text-gray-500 md:text-xl">
        The page you are looking for
        <br />
        doesn’t exist or has been moved
      </p>
      <Link
        to="/contact"
        className="rounded-full bg-gray-100 px-6 py-3 font-medium text-black transition hover:bg-gray-200"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default NotFoundPage;
