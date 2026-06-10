"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Award, 
  Bell, 
  Settings, 
  LogOut,
  ChevronDown,
  ChevronRight,
  Home,
  Info,
  GraduationCap,
  Trophy,
  Image as ImageIcon,
  PhoneCall,
  Phone,
  Sparkles,
  Search,
  ChevronsUpDown
} from "lucide-react";

export default function SideBar() {
  const [coursesExpanded, setCoursesExpanded] = useState(false);

  const portalItems = [
    { name: "Dashboard", icon: LayoutDashboard, badge: null, active: true },
    { name: "My Batches", icon: Users, badge: "2 Active", active: false },
    { name: "Study Material", icon: BookOpen, badge: "New", active: false },
  ];

  const coursesList = [
    { name: "8th to 10th Foundation", href: "/Course/8th-to-10th-foundation" },
    { name: "10th SSC Board", href: "/Course/10th-ssc-board" },
    { name: "FYJC & SYJC", href: "/Course/fyjc-syjc" },
    { name: "Degree Section", href: "/Course/degree-section" },
  ];

  const otherLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/About", icon: Info },
    { name: "Admission", href: "/Admission", icon: GraduationCap },
    { name: "Result", href: "/Result", icon: Trophy },
    { name: "Gallery", href: "/Gallery", icon: ImageIcon },
    { name: "Contact", href: "/Contact", icon: PhoneCall },
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-150 shadow-xs p-5 flex flex-col justify-between h-full min-h-[520px]">
      
      {/* Upper Content */}
      <div className="space-y-4">
        
        {/* Top Logo / Brand Section */}
        <div className="flex items-center justify-between pb-3.5 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-semibold text-base overflow-hidden relative shrink-0">
              <Image
                width={45}
                height={45}
                src="/logo.webp"
                alt="logo"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm font-bold text-gray-900 leading-tight truncate">
                Ritesh Classes
              </h2>
              <p className="text-[10px] font-bold text-indigo-650 uppercase tracking-wider -mt-0.5">
                Academy
              </p>
            </div>
          </Link>
          <ChevronsUpDown className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 shrink-0" />
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search..."
            disabled
            className="w-full bg-gray-50/80 border border-gray-100 rounded-xl pl-10 pr-3 py-1.5 text-xs text-gray-400 cursor-not-allowed focus:outline-none"
          />
        </div>

        {/* Student Portal Links Group */}
        <div className="space-y-1 pt-1.5">
          {portalItems.map((item, idx) => (
            <button
              key={idx}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13px] font-semibold transition-all group ${
                item.active 
                  ? "bg-indigo-50/70 text-indigo-600" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-950"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className={`w-4.5 h-4.5 transition-colors ${
                  item.active ? "text-indigo-600" : "text-gray-400 group-hover:text-gray-600"
                }`} />
                <span>{item.name}</span>
              </div>
              
              {item.badge && (
                <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full ${
                  item.badge === "New" 
                    ? "bg-amber-50 text-amber-700 border border-amber-100" 
                    : "bg-indigo-50 text-indigo-700 border border-indigo-100"
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Subtle Divider */}
        <div className="border-t border-gray-100 my-1" />

        {/* Explore Academy / General Navigation Links Group */}
        <div className="space-y-0.5">
          {/* Home Link */}
          <Link
            href="/"
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-950 transition-all group"
          >
            <Home className="w-4.5 h-4.5 text-gray-400 group-hover:text-gray-600 transition-colors" />
            <span>Home</span>
          </Link>

          {/* Collapsible Courses Menu */}
          <div>
            <button
              onClick={() => setCoursesExpanded(!coursesExpanded)}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13px] font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-950 transition-all group"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4.5 h-4.5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                <span>Courses</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-250 ${
                coursesExpanded ? "transform rotate-180 text-gray-650" : ""
              }`} />
            </button>

            {/* Courses expanded submenu with connecting lines */}
            {coursesExpanded && (
              <div className="ml-6.5 pl-4 border-l border-gray-200 space-y-2 mt-1 mb-2">
                {coursesList.map((course, idx) => (
                  <Link
                    key={idx}
                    href={course.href}
                    className="block text-[12px] font-semibold text-gray-500 hover:text-indigo-650 transition-colors py-1 relative"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          {otherLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-950 transition-all group"
            >
              <link.icon className="w-4.5 h-4.5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

      </div>

      {/* Bottom Section - CTA Buttons & User Profile */}
      <div className="space-y-4 pt-4 border-t border-gray-100 mt-4">
        
        {/* CTA Buttons */}
        <div className="space-y-2">
          <Link
            href="/#demo-form"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-black text-white hover:bg-indigo-600 rounded-xl text-xs font-bold transition-all shadow-xs"
          >
            <span>Book Free Demo</span>
          </Link>
          <a
            href="tel:+918104837019"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 hover:border-black hover:bg-gray-50 rounded-xl text-xs font-bold text-gray-800 transition-all shadow-3xs"
          >
            <Phone className="w-3.5 h-3.5 text-indigo-600" />
            <span>Call Us Now</span>
          </a>
        </div>

        {/* User Profile Block */}
        <div className="pt-3.5 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative shrink-0">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                AS
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-bold text-gray-900 truncate">Aditya Singh</h4>
              <p className="text-[10px] font-semibold text-gray-550 truncate">aditya@riteshclasses.com</p>
            </div>
          </div>
          <ChevronsUpDown className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-650 shrink-0" />
        </div>

      </div>

    </div>
  );
}
