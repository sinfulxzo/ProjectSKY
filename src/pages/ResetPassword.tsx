import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send a password reset email
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-navy-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Back to Login */}
        <Link 
          to="/login" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-teal-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Login
        </Link>

        {/* Reset Password Card */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-navy-800">Smart Ledger</h1>
              <div className="w-12 h-1 bg-teal-600 mx-auto mt-2 rounded-full"></div>
            </div>
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Reset Password
            </CardTitle>
            <CardDescription className="text-gray-600">
              {isSubmitted 
                ? "Check your email for reset instructions"
                : "Enter your email to receive reset instructions"
              }
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    required
                  />
                </div>

                {/* Reset Button */}
                <Button
                  type="submit"
                  className="w-full h-11 bg-teal-600 hover:bg-teal-700 text-white font-medium"
                >
                  Send Reset Instructions
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-gray-600">
                  We've sent password reset instructions to <strong>{email}</strong>
                </p>
                <p className="text-sm text-gray-500">
                  Didn't receive the email? Check your spam folder or try again.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="w-full"
                >
                  Try Different Email
                </Button>
              </div>
            )}

            {/* Back to Login Link */}
            <div className="text-center">
              <Link
                to="/login"
                className="text-sm text-teal-600 hover:text-teal-700 font-medium"
              >
                Remember your password? Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;