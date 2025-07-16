import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Building2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/image_1752648813182.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/report-issues", label: "Report Issues" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src={logoImage} 
              alt="BuildWithMumbai Logo" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-gray-900">BuildWithMumbai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`font-medium transition-all duration-300 cursor-pointer hover:scale-105 ${
                    location === item.path
                      ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                      : "text-gray-700 hover:text-blue-700 hover:transform hover:translate-y-[-1px]"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <Link key={item.path} href={item.path}>
                  <span
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 px-4 rounded-md font-medium transition-all duration-300 cursor-pointer hover:scale-105 ${
                      location === item.path
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-700 hover:text-blue-700 hover:bg-gray-50 hover:transform hover:translate-x-1"
                    }`}
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
