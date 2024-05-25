import Link from 'next/link';

const ForbiddenPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded bg-white p-8 shadow-md">
        <h1 className="mb-4 text-3xl font-semibold">403 - Forbidden</h1>
        <p className="mb-6 text-gray-600">
          Only admins are allowed to access this page.
        </p>
        <div className="flex justify-between">
          <Link href="/user">
            <a className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              User Dashboard
            </a>
          </Link>
          <Link href="/">
            <a className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
              Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForbiddenPage;
