import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Placeholder */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="w-24 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"></div>
          </Link>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-4 flex-1">
          <Link href="/page1" className="w-20 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors block"></Link>
          <Link href="/page2" className="w-20 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors block"></Link>
          <Link href="/page3" className="w-20 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors block"></Link>
          <Link href="/page4" className="w-20 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors block"></Link>
        </div>

        {/* Profile Icon */}
        <div className="flex-shrink-0 flex justify-end">
          <button className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center overflow-hidden hover:bg-gray-100 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-8 h-8 text-gray-800 mt-2"
            >
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
      </div>
    </nav>
  );
}