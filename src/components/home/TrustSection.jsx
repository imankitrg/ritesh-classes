import Image from "next/image";
import Link from "next/link";

import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import {
  MdEmail,
  MdCall,
} from "react-icons/md";

const trustCards = [
  {
    title: "10th SSC Board Specialist",
    description:
      "Highly experienced SSC board preparation with excellent results and student performance every year.",
    image: "/home/ssc.webp",
  },
  {
    title: "FYJC & SYJC Expert Teaching",
    description:
      "Strong conceptual teaching for junior college students with regular practice and test sessions.",
    image: "/home/ssc.webp",
  },
  {
    title: "Degree Section Support",
    description:
      "Quality guidance for degree students with practical understanding and exam-oriented preparation.",
    image: "/home/mainmu.webp",
  },
  {
    title: "8th To 10th Academic Foundation",
    description:
      "Strong academic guidance for 8th, 9th, and 10th students with concept-based teaching, board preparation, mentorship, and disciplined learning support.",
    image: "/home/ssc.webp",
  },
  {
    title: "FYJC & SYJC Testing & Career Guidance",
    description:
      "Focused mentorship, regular tests, revision sessions, and career-oriented academic support for FYJC and SYJC students.",
    image: "/home/ssc.webp",
  },
  {
    title: "Degree Boards & Learning Environment",
    description:
      "Professional guidance for degree students with practical academics, structured learning environment, university preparation, and long-term career development.",
    image: "/home/mainmu.webp",
  }
];

export default function TrustSection() {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-3">
          Why Parents Trust Ritesh Classes?
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT SIDE - FOUNDER CARD */}
          <div className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white">

            <div className="grid grid-cols-1 min-h-[750px]">

              {/* IMAGE */}
              <div className="relative h-[350px] overflow-hidden">

                <Image
                  src="/home/ritesh.webp"
                  alt="Prof. Ritesh Singh"
                  fill
                  priority
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Floating Tag */}
                <div className="absolute top-6 left-6 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                  Founder & Director
                </div>

                {/* Bottom Name */}
                <div className="absolute bottom-8 left-8 text-white">

                  <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                    Prof. Ritesh Singh
                  </h2>

                  <p className="text-lg text-gray-200 mt-3">
                    Founder of Ritesh Academy
                  </p>

                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 md:p-10 flex flex-col justify-between">

                <div>

                  {/* Academy */}
                  <div className="inline-flex px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700 mb-6">
                    RITESH ACADEMY
                  </div>

                  {/* Qualification */}
                  <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                    🎓 B.Com(F.M) | M.Com | B.Ed
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-lg mt-6">
                    To secure a position as a teacher and utilize dedication
                    towards fostering quality education for students. Building
                    strong academic foundations with modern teaching methods,
                    discipline, and focused mentorship for long-term student success.
                  </p>

                  {/* Highlight Cards */}
                  <div className="grid grid-cols-2 gap-4 mt-8">

                    <div className="rounded-3xl bg-gray-50 border border-gray-100 p-5">
                      <h4 className="text-3xl font-semibold text-gray-900">
                        3+
                      </h4>

                      <p className="text-gray-500 mt-2 text-sm">
                        Years Teaching Experience
                      </p>
                    </div>

                    <div className="rounded-3xl bg-gray-50 border border-gray-100 p-5">
                      <h4 className="text-3xl font-semibold text-gray-900">
                        SSC
                      </h4>

                      <p className="text-gray-500 mt-2 text-sm">
                        Board Specialist
                      </p>
                    </div>

                  </div>
                </div>

                {/* CONTACT SECTION */}
                <div className="mt-10">

                  <div className="rounded-[28px] bg-white p-6 text-black">

                    <div className="flex items-center justify-between gap-4 flex-wrap">

                      <div>
                        <p className="text-sm text-gray-400">
                          Contact Information
                        </p>

                        <h3 className="text-2xl font-semibold mt-2">
                          Connect With Sir
                        </h3>
                      </div>

                      <button className="px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-red-500 transition-colors">
                        <Link href="/">Book Demo</Link>
                      </button>

                    </div>

                    {/* CONTACT ITEMS */}
                    <div className="space-y-5 mt-8">

                      {/* PHONE */}
                      <div className="flex items-start gap-4">

                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                          <MdCall className="text-2xl" />
                        </div>

                        <div>
                          <p className="text-sm text-gray-400">
                            Phone Numbers
                          </p>

                          <Link href="tel:+918104837019">
                            <p className="text-lg mt-1">
                              +91 8104837019
                            </p>
                          </Link>

                          <Link href="tel:+919821767980">
                            <p className="text-lg">
                              +91 9821767980
                            </p>
                          </Link>
                        </div>
                      </div>

                      {/* EMAIL */}
                      <div className="flex items-start gap-4">

                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                          <MdEmail className="text-2xl" />
                        </div>

                        <div>
                          <p className="text-sm text-gray-400">
                            Email Address
                          </p>

                          <Link
                            href="mailto:riteshacademy920@gmail.com"
                            className="text-lg mt-1 break-all hover:text-gray-300 transition-colors inline-block"
                          >
                            riteshacademy920@gmail.com
                          </Link>
                        </div>
                      </div>

                      {/* SOCIAL */}
                      <div className="flex items-start gap-4">

                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                          <FaInstagram className="text-2xl" />
                        </div>

                        <div>
                          <p className="text-sm text-gray-400">
                            Instagram
                          </p>

                          <Link href="https://www.instagram.com/riteshacademy_111/">
                            <p className="text-lg mt-1">
                              @riteshacademy_111
                            </p>
                          </Link>
                        </div>
                      </div>

                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap gap-4 mt-8">

                      <a
                        href="https://wa.me/918104837019"
                        target="_blank"
                        className="flex-1 min-w-[180px] px-6 py-4 rounded-2xl bg-green-500 hover:bg-yellow-400 transition-colors flex items-center justify-center gap-3 font-semibold"
                      >
                        <FaWhatsapp className="text-2xl" />
                        WhatsApp
                      </a>

                      <a
                        href="tel:8104837019"
                        className="flex-1 min-w-[180px] px-6 py-4 rounded-2xl bg-black text-white hover:bg-red-500 transition-colors flex items-center justify-center gap-3 font-semibold"
                      >
                        <MdCall className="text-2xl" />
                        Call Now
                      </a>

                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE - TRUST CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {trustCards.map((card, index) => (
              <div
                key={index}
                className="rounded-[32px] p-8 bg-white"
              >

                {/* TOP CIRCLE ICON */}
                <div className="w-24 h-24 rounded-full bg-emerald-400 flex items-center justify-center overflow-hidden">

                  <Image
                    src={card.image}
                    alt={card.title}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />

                </div>

                {/* CONTENT */}
                <div className="mt-8">

                  <h3 className="text-2xl font-semibold leading-snug text-gray-900 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-base leading-relaxed text-gray-600 group-hover:text-gray-300 transition-colors mt-4">
                    {card.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}