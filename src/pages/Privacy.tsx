import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
          <h1 className="text-3xl font-bold text-navy-900 mb-6">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">Last updated: January 1, 2024</p>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
            </p>

            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>To provide and maintain our services</li>
              <li>To process transactions and send related information</li>
              <li>To send technical notices and support messages</li>
              <li>To improve our services and develop new features</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
            </p>

            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
            </p>

            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">6. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at privacy@smartledger.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;