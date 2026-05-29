import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-7 sm:px-8 lg:px-6 p-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-semibold text-lg">
            <Image
              width={50}
              height={50}
              src="/logo.webp" alt="logo" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Ritesh
            </h2>
            <p className="text-xs text-gray-500 -mt-1">
              Academy
            </p>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
          >
            Courses
          </Link>

          <Link
            href="/teachers"
            className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
          >
            Teachers
          </Link>

          <Link
            href="/about"
            className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <button className="px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
          Join Now
        </button>
      </div>
    </nav>
  );
}