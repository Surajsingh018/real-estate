import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";

const Signup = () => {
  const { register, verifyEmail } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [showP, setShowP] = useState(false);
  const [showC, setShowC] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [phase, setPhase] = useState("form"); // form | verify
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!formData.agreeToTerms) {
      setError("Please agree to the terms");
      return;
    }
    setLoading(true);
    try {
      await register({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email.trim(),
        password: formData.password,
        phoneNumber: formData.phone.trim(),
      });
      setPhase("verify");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await verifyEmail(formData.email.trim(), otp.trim());
      navigate("/login", { replace: true });
    } catch (err) {
      setError(err.message || "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-indigo-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#13216e]">Create Account</h2>
          <p className="text-[#4e0dff] mt-2">
            Join Propy Cons and find your dream property
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8">
          {phase === "form" ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#13216e] mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                      placeholder="First name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#13216e] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#13216e] mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#13216e] mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#13216e] mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showP ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                      placeholder="Create password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowP(!showP)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showP ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#13216e] mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showC ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                      placeholder="Confirm password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowC(!showC)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showC ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="w-4 h-4 text-purple-600 rounded mt-1"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the{" "}
                    <Link to="/terms" className="text-purple-600 hover:text-purple-800">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-purple-600 hover:text-purple-800">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleChange}
                    className="w-4 h-4 text-purple-600 rounded mt-1"
                  />
                  <span className="ml-2 text-sm text-gray-600">Subscribe to newsletter</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold disabled:opacity-50"
              >
                {loading ? "Creating account…" : "Create Account"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerify} className="space-y-6">
              <h3 className="text-xl font-semibold text-center">Verify your email</h3>
              <p className="text-center text-sm text-gray-600">
                We sent a 6-digit code to <strong>{formData.email}</strong>
              </p>
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="w-full text-center text-2xl tracking-widest border border-gray-300 rounded-xl py-3 focus:ring-2 focus:ring-purple-500"
                placeholder="123456"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-purple-600 hover:bg-purple-700 text-white py-3"
              >
                Verify & Continue
              </button>
              <button
                type="button"
                onClick={() => setPhase("form")}
                className="w-full rounded-lg border border-gray-300 py-3"
              >
                Back
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-600 hover:text-purple-800">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;