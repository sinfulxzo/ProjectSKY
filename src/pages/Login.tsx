
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import { GoogleLogin } from "@react-oauth/google";

>>>>>>> cb4e315 (Login changes with dashboard)

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password, rememberMe });
  };
=======
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()

    if (res.ok) {
      localStorage.setItem("token", data.token)
      alert("Login successful ✅")

      // Optional: navigate to dashboard
      // window.location.href = "/dashboard";
    } else {
      alert(data.error || "Login failed")
    }
  } catch (error) {
    console.error("Login error:", error)
    alert("Server error, please try again.")
  }
}
;
const handleGoogleLogin = async (credentialResponse: any) => {
  try {
    const res = await fetch("http://localhost:5000/api/google-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: credentialResponse.credential })
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("Logged in with Google ✅");
      // window.location.href = "/dashboard";
    } else {
      alert(data.error || "Google login failed");
    }
  } catch (err) {
    console.error("Google login error:", err);
    alert("Something went wrong during Google login.");
  }
};

>>>>>>> cb4e315 (Login changes with dashboard)

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-navy-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Back to Home */}
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-teal-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Smart Ledger
        </Link>

        {/* Login Card */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-navy-800">Smart Ledger</h1>
              <div className="w-12 h-1 bg-teal-600 mx-auto mt-2 rounded-full"></div>
            </div>
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Welcome back
            </CardTitle>
            <CardDescription className="text-gray-600">
              Sign in to your Smart Ledger account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
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

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 border-gray-300 focus:border-teal-500 focus:ring-teal-500 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(!!checked)}
                  />
                  <Label
                    htmlFor="remember"
                    className="text-sm text-gray-600 cursor-pointer"
                  >
                    Remember me
                  </Label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full h-11 bg-teal-600 hover:bg-teal-700 text-white font-medium"
              >
                Sign In
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
<<<<<<< HEAD
              <Button
                variant="outline"
                className="h-11 border-gray-300 hover:bg-gray-50"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
=======
              <div className="h-11 border border-gray-300 rounded-md flex items-center justify-center">
  <GoogleLogin
  onSuccess={(credentialResponse) => {
    console.log("Google credentialResponse:", credentialResponse); // ✅ Add this
    fetch("http://localhost:5000/api/google-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: credentialResponse.credential }),
    });
  }}
  onError={() => alert("Google login failed")}
  useOneTap={false}
/>

</div>

>>>>>>> cb4e315 (Login changes with dashboard)
              <Button
                variant="outline"
                className="h-11 border-gray-300 hover:bg-gray-50"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                </svg>
                Facebook
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Sign up for free
                </Link>
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            By signing in, you agree to our{" "}
            <Link to="/terms" className="text-teal-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-teal-600 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;