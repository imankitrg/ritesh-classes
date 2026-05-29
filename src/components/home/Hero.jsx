"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  "/home/banner1.webp",
  "/home/banner1.webp",
  "/home/banner1.webp",
  "/home/banner1.webp",
];

export default function Hero() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white pt-6">

      {/* Rounded Banner Container */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-4">

        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] overflow-hidden rounded-[15px]">

          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentBanner
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
                }`}
            >
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                fill
                priority
                className="object-cover"
              />
            </div>
          ))}

          {/* Optional Overlay */}
          <div className="absolute inset-0 bg-black/10 z-20" />

          {/* Slider Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`h-2 rounded-full transition-all duration-300 ${currentBanner === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/60"
                  }`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Bottom Info Section */}
      {/* for now we are not using this,i will use this later  */}
    </section>
  );
}