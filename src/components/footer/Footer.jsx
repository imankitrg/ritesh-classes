import Link from "next/link";
import Image from "next/image";


const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const MapPinIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-semibold text-lg">
                <Image
                  width={50}
                  height={50}
                  src="/logo.webp" alt="logo" />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Ritesh
                </h2>
                <p className="text-xs text-white -mt-1">
                  Academy
                </p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students to achieve academic excellence through expert guidance, comprehensive study materials, and state-of-the-art facilities.
            </p>
            <div className="flex gap-4">

              <Link href="/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </Link>

              <Link href="/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </Link>

              <Link href="htrps://instagram.com/riteshacademy_111" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </Link>

              <Link href="/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </Link>

            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Home</Link></li>
              <li><Link href="/About" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/Course" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Our Courses</Link></li>
              <li><Link href="/Result" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Result</Link></li>
              <li><Link href="/Gallery" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Gallery</Link></li>
              <li><Link href="/Admission" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Admission</Link></li>
              <li><Link href="/Contact" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Popular Courses */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Popular Courses</h4>
            <ul className="space-y-4">
              <li><Link href="/Course" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">for 8th students</Link></li>
              <li><Link href="/Course" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">for 9th students</Link></li>
              <li><Link href="/Course" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">for 10th students</Link></li>
              <li><Link href="/Course" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">for 11th students</Link></li>
              <li><Link href="/Course" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">for 12th students</Link></li>
              <li><Link href="/Course" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">for degree students</Link></li>

            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              Get In Touch
            </h4>

            <ul className="space-y-5">

              {/* Address */}
              <li className="flex items-start text-gray-400 text-sm">
                <MapPinIcon className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Room No. 1, Mahakali Caves Road,
                  Opp. Sai Baba Mandir, Near Bowlekar Ground,
                  MMRDA Colony, Andheri East,
                  Mumbai, Maharashtra 400093
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-start text-gray-400 text-sm">
                <PhoneIcon className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="tel:+918104837019"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    +91 81048 37019
                  </a>
                  <br />
                  <a
                    href="tel:+919821767980"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    +91 98217 67980
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center text-gray-400 text-sm">
                <MailIcon className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
                <a
                  href="mailto:riteshacademy920@gmail.com"
                  className="hover:text-indigo-400 transition-colors"
                >
                  riteshacademy920@gmail.com
                </a>
              </li>
            </ul>

            {/* Location Preview */}
            <div className="mt-6 overflow-hidden rounded-xl border border-gray-800">
              <a
                href="https://www.google.com/maps/place/Ritesh+Academy/@19.1333707,72.8732921,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b7671dff8d49:0xc07641e89050fa4c!8m2!3d19.1333707!4d72.8732921!16s%2Fg%2F11mst_hfxy?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/ramap.webp"
                  alt="Ritesh Academy Location"
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>

            {/* Map Button */}
            <a
              href="https://www.google.com/maps/place/Ritesh+Academy/@19.1333707,72.8732921,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b7671dff8d49:0xc07641e89050fa4c!8m2!3d19.1333707!4d72.8732921!16s%2Fg%2F11mst_hfxy?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              View on Google Maps →
            </a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Ritesh Classes. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}