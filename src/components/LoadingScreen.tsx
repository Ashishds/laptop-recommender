"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
        >
            {/* AI brain / Analysis illustration */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: 1,
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative w-64 h-64 mb-10"
            >
                <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-[80px] animate-pulse" />
                <Image
                    src="/images/loading-modern.png"
                    alt="AI Analyzing"
                    fill
                    className="object-contain relative z-10 drop-shadow-[0_0_50px_rgba(99,102,241,0.3)]"
                    priority
                />
            </motion.div>


            {/* Text */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold text-white mb-3"
            >
                Analyzing your needs...
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-lg max-w-md"
            >
                Our AI is finding the{" "}
                <span className="text-indigo-400 font-semibold">top 3 laptops</span> for
                you
            </motion.p>

            {/* Loading progress bar */}
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ delay: 0.4 }}
                className="mt-8 w-full max-w-xs"
            >
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 8, ease: "linear" }}
                    />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Scanning options</span>
                    <span>Comparing prices</span>
                    <span>Finalizing</span>
                </div>
            </motion.div>

            {/* Features being checked */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex flex-wrap justify-center gap-3"
            >
                {[
                    { icon: "⚡", text: "Performance" },
                    { icon: "💰", text: "Value" },
                    { icon: "🔋", text: "Battery" },
                    { icon: "🎯", text: "Match" },
                ].map((item, i) => (
                    <motion.div
                        key={item.text}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.15 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700"
                    >
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        >
                            {item.icon}
                        </motion.span>
                        <span className="text-sm text-gray-400">{item.text}</span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
