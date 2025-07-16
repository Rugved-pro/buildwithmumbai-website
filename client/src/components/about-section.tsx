import { Megaphone, ShieldCheck, Globe, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming Mumbai through technology-enabled civic participation and community-driven infrastructure improvement.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Megaphone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Raise Awareness 📢</h3>
            <p className="text-gray-600 text-sm">Educate citizens about their role in municipal governance and infrastructure reporting.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Civic Responsibility 🛡️</h3>
            <p className="text-gray-600 text-sm">Foster a culture of active citizenship and shared responsibility for urban development.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Community Voice 🌐</h3>
            <p className="text-gray-600 text-sm">Amplify citizen concerns and ensure they reach the right authorities for action.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Drive Change ⚡</h3>
            <p className="text-gray-600 text-sm">Create sustainable systems for continuous improvement and community engagement.</p>
          </div>
        </div>

        {/* Mission Statement Box */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            To create a transparent, efficient, and citizen-centric platform that empowers every Mumbaikar to contribute to their city's development. We believe that when communities unite with technology, extraordinary transformation becomes possible.
          </p>
        </div>
      </div>
    </section>
  );
}
