import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main>
      <div className="flex min-h-screen items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="mb-4 font-light text-2xl">Product Not Found</h1>
          <p className="mb-8">
            The product you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="inline-block border border-gray-300 px-6 py-3 font-light text-sm transition-colors hover:border-gray-800"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
