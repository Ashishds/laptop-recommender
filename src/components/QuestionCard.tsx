"use client";

import { motion } from "framer-motion";
import OptionButton from "./OptionButton";

interface Question {
    id: string;
    question: string;
    subtitle?: string;
    options: {
        value: string;
        label: string;
        description?: string;
        icon?: string;
    }[];
}

interface QuestionCardProps {
    question: Question;
    selectedValue: string;
    onSelect: (value: string) => void;
}

export default function QuestionCard({
    question,
    selectedValue,
    onSelect,
}: QuestionCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
        >
            {/* Question */}
            <h2 className="text-2xl md:text-3xl font-semibold text-[#E5E7EB] mb-3 text-center leading-tight">
                {question.question}
            </h2>

            {/* Subtitle */}
            {question.subtitle && (
                <p className="text-[#9CA3AF] text-center mb-8">
                    {question.subtitle}
                </p>
            )}

            {/* Options */}
            <div className="space-y-3">
                {question.options.map((option, index) => (
                    <OptionButton
                        key={option.value}
                        option={option}
                        isSelected={selectedValue === option.value}
                        onSelect={() => onSelect(option.value)}
                        index={index}
                    />
                ))}
            </div>
        </motion.div>
    );
}
