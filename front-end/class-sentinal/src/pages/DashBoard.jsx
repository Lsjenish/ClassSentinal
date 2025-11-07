import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./NavBar";
import { useDispatch } from "react-redux";
import { analyseSpam } from "../state/analyse/Action";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleAnalyze = () => {
    console.log(email, content);
    dispatch(analyseSpam({ email: email, content: content , navigate }));
  };

  return (
    <div className="min-h-screen bg-black text-green-300 font-mono relative overflow-hidden">
      {/* Faint Matrix Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="matrix-layer absolute inset-0" />
      </div>

      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto mt-10 border border-green-900/40 rounded-2xl bg-[rgba(0,15,0,0.7)] shadow-[0_0_20px_rgba(0,255,0,0.2)] p-6 backdrop-blur-sm"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold mb-5 text-center text-green-400 tracking-widest"
        >
          ▓ Analyze Suspicious Mail ▓
        </motion.h2>

        <motion.input
          whileFocus={{ scale: 1.02, boxShadow: "0 0 10px #00ff80" }}
          transition={{ type: "spring", stiffness: 200 }}
          className="border border-green-900/50 bg-[rgba(0,0,0,0.5)] w-full mb-3 p-2 rounded text-green-200 placeholder-green-500/40"
          placeholder="Sender Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <motion.input
          whileFocus={{ scale: 1.02, boxShadow: "0 0 10px #00ff80" }}
          transition={{ type: "spring", stiffness: 200 }}
          className="border border-green-900/50 bg-[rgba(0,0,0,0.5)] w-full mb-3 p-2 rounded text-green-200 placeholder-green-500/40"
          placeholder="Domain (optional)"
          onChange={(e) => setDomain(e.target.value)}
        />
        <motion.textarea
          whileFocus={{ scale: 1.01, boxShadow: "0 0 10px #00ff80" }}
          transition={{ type: "spring", stiffness: 200 }}
          className="border border-green-900/50 bg-[rgba(0,0,0,0.5)] w-full mb-4 p-2 rounded text-green-200 placeholder-green-500/40 h-32"
          placeholder="Paste suspicious content..."
          onChange={(e) => setContent(e.target.value)}
        />
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "rgba(0,255,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAnalyze}
          className="w-full border border-green-800 bg-[rgba(0,0,0,0.6)] text-green-300 py-2 rounded-lg hover:shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-all"
        >
          Analyze
        </motion.button>
      </motion.div>

      <style>{`
        .matrix-layer {
          background-image: radial-gradient(circle at 10% 10%, rgba(0,255,100,0.02), transparent 10%), 
                            radial-gradient(circle at 80% 70%, rgba(0,255,150,0.02), transparent 12%);
          animation: matrixMove 10s linear infinite;
          mix-blend-mode: screen;
        }
        @keyframes matrixMove {
          0% { transform: translateY(-10%); opacity: 0.1; }
          50% { transform: translateY(5%); opacity: 0.2; }
          100% { transform: translateY(-10%); opacity: 0.1; }
        }
      `}</style>
    </div>
  );
}
