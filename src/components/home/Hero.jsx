import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full">
      {/* Hero Image */}
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative bg-gray-400">
        <Image
          src="/classes.webp"
          alt="Classes Hero Image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Side: Text and CTAs */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900">
                Headline
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mt-2">
                sub heading
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full font-medium transition-colors">
                CTA
              </button>
              <button className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full font-medium transition-colors">
                CTA
              </button>
            </div>
          </div>

          {/* Right Side: Paragraph */}
          <div className="flex-1 md:mt-4">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Use the viewport and onViewportChange props to control the map's viewport externally. This is useful when you need to sync the map state with your application or respond to viewport changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
