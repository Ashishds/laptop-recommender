"use client";

import { motion } from "framer-motion";

interface Option {
    value: string;
    label: string;
    description?: string;
    icon?: string;
}

interface OptionButtonProps {
    option: Option;
    isSelected: boolean;
    onSelect: () => void;
    index: number;
}

export default function OptionButton({
    option,
    isSelected,
    onSelect,
    index,
}: OptionButtonProps) {
    return (
        <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={onSelect}
            className={`w-full p-4 rounded-xl border text-left transition-all duration-300 glass glass-hover ${isSelected
                ? "border-indigo-500 bg-indigo-500/10 shadow-lg shadow-indigo-500/10"
                : "border-white/10"
                }`}
        >
            <div className="flex items-center gap-4">
                {/* Icon */}
                {option.icon && (
                    <span className="text-xl flex-shrink-0">{option.icon}</span>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <p className={`font-medium ${isSelected ? "text-indigo-400" : "text-[#E5E7EB]"}`}>
                        {option.label}
                    </p>
                    {option.description && (
                        <p className="text-sm text-[#6B7280] mt-0.5">{option.description}</p>
                    )}
                </div>

                {/* Radio indicator */}
                <div
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${isSelected
                        ? "border-indigo-500 bg-indigo-500"
                        : "border-[#374151]"
                        }`}
                >
                    {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                </div>
            </div>
        </motion.button>
    );
}
