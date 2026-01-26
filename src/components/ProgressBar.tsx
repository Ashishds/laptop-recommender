"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
    const progress = ((currentStep + 1) / totalSteps) * 100;

    return (
        <div className="w-full mb-10">
            {/* Step indicator */}
            <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-[#9CA3AF]">
                    Question {currentStep + 1} of {totalSteps}
                </span>
                <span className="text-sm text-indigo-400">
                    {Math.round(progress)}%
                </span>
            </div>

            {/* Progress bar */}
            <div className="h-1.5 bg-[#1F2937] rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-indigo-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </div>
        </div>
    );
}
