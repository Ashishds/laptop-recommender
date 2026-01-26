"use client";

import { motion } from "framer-motion";

interface RecommendationCardProps {
    recommendation: string;
    laptopName: string;
    onStartOver: () => void;
}

export default function RecommendationCard({
    recommendation,
    laptopName,
    onStartOver,
}: RecommendationCardProps) {
    // Generate affiliate links (placeholder URLs)
    const amazonUrl = `https://www.amazon.in/s?k=${encodeURIComponent(laptopName)}&tag=youraffiliateid`;
    const flipkartUrl = `https://www.flipkart.com/search?q=${encodeURIComponent(laptopName)}&affid=youraffid`;

    // Parse the recommendation into sections
    const parseRecommendation = (text: string) => {
        const sections: { title: string; content: string }[] = [];
        const lines = text.split("\n");

        let currentTitle = "";
        let currentContent: string[] = [];

        lines.forEach((line) => {
            const trimmedLine = line.trim();

            if (trimmedLine.startsWith("---")) return;

            if (
                trimmedLine.endsWith(":") &&
                !trimmedLine.startsWith("-") &&
                !trimmedLine.includes("₹")
            ) {
                if (currentTitle && currentContent.length > 0) {
                    sections.push({
                        title: currentTitle,
                        content: currentContent.join("\n"),
                    });
                }
                currentTitle = trimmedLine.slice(0, -1);
                currentContent = [];
            } else if (trimmedLine) {
                currentContent.push(trimmedLine);
            }
        });

        if (currentTitle && currentContent.length > 0) {
            sections.push({
                title: currentTitle,
                content: currentContent.join("\n"),
            });
        }

        return sections;
    };

    const sections = parseRecommendation(recommendation);

    // Extract laptop name and price from recommendation
    const extractInfo = (text: string) => {
        const nameMatch = text.match(/Laptop Name[:\s]+(.+)/i);
        const priceMatch = text.match(/Estimated Price[:\s]+(.+)/i);
        return {
            name: nameMatch ? nameMatch[1].trim() : laptopName,
            price: priceMatch ? priceMatch[1].trim() : "",
        };
    };

    const info = extractInfo(recommendation);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl mx-auto"
        >
            {/* Header */}
            <div className="text-center mb-8">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-4"
                >
                    <span className="text-green-400">✓</span>
                    <span className="text-green-400 font-medium">Perfect Match Found!</span>
                </motion.div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    🎉 Your Recommended Laptop
                </h1>
            </div>

            {/* Main recommendation card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative rounded-3xl overflow-hidden"
            >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl" />

                <div className="relative m-[2px] bg-gray-900 rounded-3xl p-6 md:p-8">
                    {/* Laptop name and price */}
                    <div className="mb-6 pb-6 border-b border-gray-700">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {info.name}
                        </h2>
                        {info.price && (
                            <p className="text-xl text-indigo-400 font-semibold">{info.price}</p>
                        )}
                    </div>

                    {/* Recommendation content */}
                    <div className="space-y-6">
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                            >
                                <h3 className="text-lg font-semibold text-indigo-400 mb-3 flex items-center gap-2">
                                    {section.title === "Why this laptop is best" && "💡"}
                                    {section.title === "Key Specifications" && "⚙️"}
                                    {section.title === "Best for" && "🎯"}
                                    {section.title === "Things to keep in mind" && "⚠️"}
                                    {section.title === "Availability" && "🛒"}
                                    {section.title}
                                </h3>
                                <div className="text-gray-300 leading-relaxed whitespace-pre-line pl-4 border-l-2 border-gray-700">
                                    {section.content.split("\n").map((line, i) => (
                                        <p key={i} className="mb-1">
                                            {line.startsWith("-") ? line : line}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Affiliate buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
                <a
                    href={amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF9900] to-[#FF6600] text-white font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105"
                >
                    <span className="text-2xl">🛒</span>
                    View on Amazon
                </a>

                <a
                    href={flipkartUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2874F0] to-[#1565D8] text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                >
                    <span className="text-2xl">🛍️</span>
                    View on Flipkart
                </a>
            </motion.div>

            {/* Start over button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 text-center"
            >
                <button
                    onClick={onStartOver}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Start Over
                </button>
            </motion.div>
        </motion.div>
    );
}
