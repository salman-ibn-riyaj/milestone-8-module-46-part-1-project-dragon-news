import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        {/* Dragon icon */}
        <div className="text-8xl mb-6">🐉</div>

        {/* 404 */}
        <h1 className="text-7xl font-black text-red-600 mb-2">404</h1>

        {/* Message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          Looks like this page flew away with the dragon. The news you&apos;re
          looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Back to home button */}
        <Link
          href="/"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}