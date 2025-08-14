import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
          <h1 className="text-3xl font-bold text-navy-900 mb-6">Terms of Service</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">Last updated: January 1, 2024</p>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Smart Ledger, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">2. Service Description</h2>
            <p className="text-gray-700 mb-4">
              Smart Ledger is a business management platform designed for Indian small and medium businesses to manage income, expenses, growth, and customers.
            </p>

            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the service in compliance with applicable laws</li>
              <li>Not misuse or abuse the service</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">4. Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law.
            </p>

            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">5. Privacy</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.
            </p>

            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">6. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at support@smartledger.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;