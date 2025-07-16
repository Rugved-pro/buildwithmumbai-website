export default function IntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Group 36 – SPIT Community Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A student-led initiative combining academic excellence with social impact to create meaningful change in our community.
          </p>
        </div>

        {/* Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Excellence</h3>
            <p className="text-gray-600">Applying theoretical knowledge to solve real-world problems through innovative technology solutions.</p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Social Impact</h3>
            <p className="text-gray-600">Creating sustainable solutions that directly benefit Mumbai's citizens and infrastructure development.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Community First</h3>
            <p className="text-gray-600">Putting citizen voices at the center of urban development and infrastructure planning.</p>
          </div>
        </div>

        {/* Final paragraph */}
        <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            <strong className="text-blue-700">BuildWithMumbai</strong> represents our commitment to bridging the gap between technology and civic responsibility. Through this platform, we enable every Mumbai citizen to become an active participant in shaping their city's future, one report at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
