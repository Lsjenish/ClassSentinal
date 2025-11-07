import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../state/auth/Action";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(loginUser({ userData: formData, navigate }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-green-300 font-mono relative overflow-hidden">
      {/* Background matrix animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="matrix-effect absolute inset-0" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 border border-green-900/50 bg-[rgba(0,15,0,0.75)] backdrop-blur-md shadow-[0_0_25px_rgba(0,255,0,0.25)] p-8 rounded-2xl w-96"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold mb-6 text-center text-green-400 tracking-widest"
        >
          ▓ LOGIN PANEL ▓
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.03, boxShadow: "0 0 10px #00ff80" }}
            transition={{ type: "spring", stiffness: 200 }}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded border border-green-900/50 bg-[rgba(0,0,0,0.6)] text-green-200 placeholder-green-500/50"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.03, boxShadow: "0 0 10px #00ff80" }}
            transition={{ type: "spring", stiffness: 200 }}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 rounded border border-green-900/50 bg-[rgba(0,0,0,0.6)] text-green-200 placeholder-green-500/50"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,255,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-2 rounded border border-green-800 bg-[rgba(0,0,0,0.7)] text-green-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-all"
          >
            LOGIN
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-center mt-5 text-green-400/70"
        >
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-green-300 cursor-pointer hover:text-green-100 hover:underline"
          >
            Register
          </span>
        </motion.p>
      </motion.div>

      <style>{`
        .matrix-effect {
          background-image: radial-gradient(circle at 15% 10%, rgba(0,255,100,0.05), transparent 10%), 
                            radial-gradient(circle at 80% 70%, rgba(0,255,150,0.05), transparent 12%);
          animation: floatMatrix 8s ease-in-out infinite alternate;
          mix-blend-mode: screen;
        }
        @keyframes floatMatrix {
          0% { transform: translateY(-10%) scale(1); }
          50% { transform: translateY(5%) scale(1.05); }
          100% { transform: translateY(-10%) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default LoginForm;
