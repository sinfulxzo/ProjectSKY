import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-teal-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Smart Ledger
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-navy-900 mb-6">Cookie Policy</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">Last updated: January 1, 2024</p>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">1. What Are Cookies</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience.
            </p>

            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">2. How We Use Cookies</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand how you use our site</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies to show relevant advertisements</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">3. Types of Cookies We Use</h2>
            <p className="text-gray-700 mb-4">
              We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period).
            </p>

            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">4. Managing Cookies</h2>
            <p className="text-gray-700 mb-4">
              You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.
            </p>

            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">5. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our use of cookies, please contact us at support@smartledger.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;