// app/layout.jsx

import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>
        <Footer />

      </body>
    </html>
  );
}