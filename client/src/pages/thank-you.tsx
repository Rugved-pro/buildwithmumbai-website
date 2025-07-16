import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { CheckCircle, Home, FileText } from "lucide-react";
import { Link } from "wouter";

export default function ThankYou() {
  return (
    <div className="min-h-screen page-enter">
      <Navigation />
      <div className="pt-16 slide-up">
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 min-h-[80vh] flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Thank You!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your report has been successfully submitted. We appreciate your contribution to improving Mumbai's infrastructure.
            </p>

            {/* Success Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-600">Your report has been sent to our team for review</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-600">We will verify the details and forward it to relevant authorities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-600">You will receive updates via email regarding the status of your report</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <a className="inline-flex items-center space-x-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <Home className="w-5 h-5" />
                  <span>Back to Home</span>
                </a>
              </Link>
              
              <Link href="/report-issues">
                <a className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                  <FileText className="w-5 h-5" />
                  <span>Report Another Issue</span>
                </a>
              </Link>
            </div>

            {/* Additional Information */}
            <div className="mt-12 bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto">
              <h4 className="font-bold text-gray-900 mb-2">Stay Connected</h4>
              <p className="text-gray-600 text-sm">
                Follow our progress and see how your reports are making a difference in building a better Mumbai. 
                Together, we can create lasting change in our community.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
