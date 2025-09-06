/* -----------------  Login.jsx  (with demo block active)  ----------------- */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const user = await login({ email, password });
      console.log("Login response :", user); // DEBUG
      const role = user?.role || "user"; // fallback
      navigate(role === "admin" ? "/admin" : "/dashboard/user");
    } catch (err) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  /*  1-click demo fill  */
  const fillDemo = (type) => {
    if (type === "admin") {
      setEmail("admin@gmail.com");
      setPassword("admin123");
    } else {
      setEmail("user@gmail.com");
      setPassword("user123");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-indigo-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#13216e]">Welcome</h2>
          <p className="text-[#4e0dff] mt-2">Sign in to your Propy Cons account</p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div>
              <label className="block text-sm font-bold text-[#13216e] mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#13216e] mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-purple-600 hover:text-indigo-800">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold disabled:opacity-50"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          {/*  DEMO BLOCK  */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl text-xs text-gray-700">
            <p className="font-semibold mb-2">Demo accounts (click to auto-fill)</p>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => fillDemo("admin")}
                className="text-left hover:text-purple-700"
              >
                <span className="font-medium">Admin:</span> admin@gmail.com / admin123
              </button>
              <button
                type="button"
                onClick={() => fillDemo("user")}
                className="text-left hover:text-purple-700"
              >
                <span className="font-medium">User:</span> user@gmail.com / user123
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-purple-600 hover:text-purple-800">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { Eye, EyeOff, Mail, Lock } from "lucide-react";

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       const user = await login({ email, password });
//       navigate(user.role === "admin" ? "/admin" : "/dashboard/user");
//     } catch (err) {
//       setError(err.message || "Invalid credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-indigo-50 flex items-center justify-center py-12 px-4">
//       <div className="max-w-md w-full">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-[#13216e]">Welcome</h2>
//           <p className="text-[#4e0dff] mt-2">Sign in to your Propy Cons account</p>
//         </div>

//         <div className="bg-white rounded-xl shadow-2xl p-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <div>
//               <label className="block text-sm font-bold text-[#13216e] mb-2">Email Address</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-bold text-[#13216e] mb-2">Password</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type={show ? "text" : "password"}
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShow(!show)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {show ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <label className="flex items-center">
//                 <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" />
//                 <span className="ml-2 text-sm text-gray-600">Remember me</span>
//               </label>
//               <Link to="/forgot-password" className="text-sm text-purple-600 hover:text-indigo-800">
//                 Forgot password?
//               </Link>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full rounded-lg bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold disabled:opacity-50"
//             >
//               {loading ? "Signing in…" : "Sign In"}
//             </button>
//           </form>

//           <details className="text-xs text-gray-500 mt-4">
//             <summary>Demo credentials</summary>
//             <ul className="mt-1 list-disc list-inside">
//               {/* <li>Admin: admin@gmail.com / admin123</li>
//               <li>User: user@gmail.com / user123</li> */}
//             </ul>
//           </details>

//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Don't have an account?{" "}
//               <Link to="/signup" className="text-purple-600 hover:text-purple-800">
//                 Sign up for free
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;