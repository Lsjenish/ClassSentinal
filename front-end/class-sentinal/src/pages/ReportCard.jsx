import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function ReportCard() {
  const analyse = useSelector((store) => store.analyse);

  const getColor = (score) => {
    if (score < 40) return "border-green-400 shadow-[0_0_20px_#00ff00]";
    if (score < 70) return "border-yellow-400 shadow-[0_0_20px_#ffff00]";
    return "border-red-500 shadow-[0_0_20px_#ff0000]";
  };

  if (!analyse?.report) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#050505] text-green-400 font-mono text-lg animate-pulse">
        [ Initializing Analysis Console... ]
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] text-green-400 font-mono overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`w-[90%] md:w-[70%] lg:w-[50%] p-6 border-l-4 rounded-lg bg-[#0a0a0a]/80 backdrop-blur-md ${getColor(
          analyse.report?.percentage
        )} relative overflow-hidden`}
      >
        {/* Neon Scan Line */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: ["-100%", "100%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-full h-[2px] bg-green-400 opacity-40"
        />

        {/* Header */}
        <h3 className="text-2xl font-bold text-green-300 mb-4 tracking-widest text-center">
          ⛓️ [ SYSTEM SECURITY REPORT ]
        </h3>

        {/* Body */}
        <div className="space-y-3">
          <p className="text-lg font-semibold">
            ► Risk Score:{" "}
            <span className="text-green-200">
              {analyse.report?.percentage}
            </span>
          </p>
          <p className="text-lg font-semibold">
            ► Status:{" "}
            <span
              className={`${
                analyse.report?.status === "Fake"
                  ? "text-red-400"
                  : "text-green-400"
              }`}
            >
              {analyse.report?.status}
            </span>
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm text-green-500 mt-2 leading-relaxed whitespace-pre-line"
          >
            ↳ {analyse.report?.reason}
          </motion.p>
        </div>

        {/* Animated Footer Line */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-5 border-t border-green-600/40 pt-3 text-center text-sm text-green-400"
        >
          [ Transmission Complete - End of Report ]
        </motion.div>
      </motion.div>
    </div>
  );
}
