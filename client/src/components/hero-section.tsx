import { Building2, Hammer, Users, Heart, ChevronDown } from "lucide-react";
import logoImage from "@assets/image_1752648813182.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 flex items-center justify-center overflow-hidden">
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-emerald-400/20 rounded-full blur-2xl animate-float-delay"></div>
        <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-blue-400/15 rounded-full blur-xl animate-float-delay-2"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="w-28 h-28 bg-white/15 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/40 p-3 shadow-2xl">
            <img 
              src={logoImage} 
              alt="BuildWithMumbai Logo" 
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Build With Mumbai
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto animate-slide-up">
          Empowering citizens to report infrastructure issues and build a better Mumbai together
        </p>

        {/* Feature icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-slide-up">
            <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Hammer className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Better Infrastructure</h3>
            <p className="text-blue-100 text-sm">Report and track infrastructure issues in real-time</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Community Driven</h3>
            <p className="text-blue-100 text-sm">Unite citizens for collective civic action</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">For Mumbai</h3>
            <p className="text-blue-100 text-sm">Dedicated to improving our beloved city</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-white mx-auto" />
        </div>
      </div>
    </section>
  );
}
