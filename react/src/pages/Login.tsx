// src/pages/Login.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import axios from "axios";

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [showForm, setShowForm] = useState(false); // Animation

  useEffect(() => {
    setTimeout(() => setShowForm(true), 100);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");
    try {
      await login(email, password);
      navigate("/events");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setErr(error.response?.data?.message || "Login failed");
      } else if (error instanceof Error) {
        setErr(error.message);
      } else {
        setErr("Login failed");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 py-12">
      <form
        onSubmit={handleLogin}
        className={`w-full max-w-md transform transition-all duration-700 ease-in-out ${
          showForm ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } bg-gray-900 text-white p-8 rounded-xl shadow-lg shadow-black/30 border border-gray-700`}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">
          Welcome Back
        </h2>

        {err && (
          <div className="mb-4 text-red-400 text-sm text-center border border-red-500 rounded p-2 bg-red-900/20">
            {err}
          </div>
        )}

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="w-full mb-4 p-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="w-full mb-6 p-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-lg font-semibold tracking-wide text-white shadow-md hover:shadow-xl"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

