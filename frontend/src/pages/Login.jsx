
import { useState } from "react";

import axios from "axios";




function LoginPage() {
  const [credentials, setCreds] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreds({
      ...credentials,
      [name]: value
    });
  };

  const handleClickLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("YOUR_API_ENDPOINT", credentials);
      console.log("Login Successful:", response.data);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-70">
      <div className="w-full max-w-md space-y-8 bg-gray-100 p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Sign in to your account</h2>
        </div>
        <form className="space-y-6" onSubmit={handleClickLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              placeholder="Enter your Email address"
              value={credentials.email}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border rounded-lg shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              required
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border rounded-lg shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <a href="#" className="text-purple-600 hover:text-purple-500 block mt-2">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
