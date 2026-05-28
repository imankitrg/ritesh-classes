export default function TrustSection() {
  const stats = [
    { id: 1, name: 'Active Students', value: '10,000+' },
    { id: 2, name: 'Expert Instructors', value: '50+' },
    { id: 3, name: 'Video Courses', value: '100+' },
    { id: 4, name: 'Average Rating', value: '4.9/5' },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by students worldwide
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Join thousands of learners who have already transformed their careers through our comprehensive classes and expert guidance.
          </p>
        </div>

        {/* Stats Grid */}
        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col bg-gray-50/50 p-8 hover:bg-gray-50 transition-colors duration-300">
              <dt className="text-sm font-medium leading-6 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 mb-2">{stat.value}</dd>
            </div>
          ))}
        </dl>

        {/* Optional Logo Cloud (Placeholders) */}
        <div className="mt-20">
          <p className="text-center text-sm font-semibold text-gray-400 mb-8 uppercase tracking-widest">
            Our alumni work at top companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">
             {/* Dummy Logos built with CSS */}
             <div className="h-8 flex items-center text-xl font-bold text-gray-800 tracking-tighter">
                <span className="bg-gray-800 text-white px-2 rounded mr-1">TECH</span>CORP
             </div>
             <div className="h-8 flex items-center text-xl font-black text-gray-800">
                GLOBAL<span className="font-light italic">sys</span>
             </div>
             <div className="h-8 flex items-center text-xl font-serif text-gray-800">
                Innovate<span className="text-blue-600">.</span>
             </div>
             <div className="h-8 flex items-center text-xl font-medium text-gray-800 tracking-wide uppercase">
                Nexus
             </div>
             <div className="h-8 flex items-center text-xl font-bold text-gray-800">
                <div className="w-6 h-6 bg-gray-800 rounded-full mr-2"></div>
                Vertex
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
