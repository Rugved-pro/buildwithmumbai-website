import {
  Building2,
  Users,
  Mail,
  MapPin,
  Instagram,
  Twitter,
} from "lucide-react";
import logoImage from "@assets/image_1752648813182.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Project Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Project Info</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              BuildWithMumbai is a student-led initiative focused on improving
              Mumbai's infrastructure through community-driven reporting and
              civic engagement.
            </p>
            <div className="flex items-center space-x-2">
              <img
                src={logoImage}
                alt="BuildWithMumbai Logo"
                className="w-8 h-8 rounded object-cover"
              />
              <span className="font-semibold">BuildWithMumbai</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Group 36 – SPIT</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:buildwithmumbai@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  buildwithmumbai@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Follow Journey */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Our Journey</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our progress and community impact initiatives.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-300 mb-2">
            Made with ❤️ by Group 36 – SPIT Community Project
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 BuildWithMumbai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
