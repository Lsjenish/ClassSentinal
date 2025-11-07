import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { logOutUser } from "../state/auth/Action";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutUser())
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative z-50 w-full px-6 py-3 flex justify-between items-center border-b border-green-900/50 shadow-[0_0_20px_rgba(0,255,0,0.15)] bg-[rgba(0,20,0,0.85)] backdrop-blur-md text-green-300 font-mono"
    >
      <motion.h1
        whileHover={{ scale: 1.05, textShadow: "0 0 8px #00ff88" }}
        className="font-bold text-2xl tracking-widest text-green-400 drop-shadow-[0_0_10px_rgba(0,255,0,0.25)] relative z-10"
      >
        ▓ spamD ▓
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,255,0,0.15)" }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLogout}
        className="relative z-10 px-4 py-2 rounded-lg border border-green-800 bg-[rgba(0,0,0,0.4)] text-green-300 hover:text-green-100 hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] transition-all duration-200"
      >
        <span className="tracking-widest font-semibold">LOGOUT</span>
      </motion.button>

      <style>{`
        nav::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(0,255,100,0.05) 0%, transparent 50%, rgba(0,255,100,0.05) 100%);
          animation: scan 4s linear infinite;
          mix-blend-mode: overlay;
          z-index: 0; /* Important: keeps the glow behind the button */
          pointer-events: none; /* Prevents blocking clicks */
        }
        @keyframes scan {
          0% { background-position: 0 0; }
          100% { background-position: 100% 0; }
        }
      `}</style>
    </motion.nav>
  );
}
