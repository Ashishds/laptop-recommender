"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Recommendation {
    tier: string;
    tierEmoji: string;
    laptopName: string;
    price: string;
    whyBest: string[];
    specs: {
        processor: string;
        ram: string;
        storage: string;
        graphics: string;
        display: string;
        battery: string;
        weight: string;
    };
    bestFor: string;
    limitations: string[];
    expertNote?: string;
}

interface RecommendationsGridProps {
    recommendations: Recommendation[];
    onStartOver: () => void;
}

export default function RecommendationsGrid({
    recommendations,
    onStartOver,
}: RecommendationsGridProps) {
    const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

    const toggleCard = (index: number) => {
        setExpandedCards((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    const expandAll = () => {
        setExpandedCards(new Set([0, 1, 2]));
    };

    const collapseAll = () => {
        setExpandedCards(new Set());
    };

    const getTierConfig = (tier: string) => {
        switch (tier) {
            case "Budget Pick":
                return {
                    accent: "text-emerald-400",
                    border: "border-emerald-500/20",
                    heavyBorder: "border-emerald-500/30",
                    innerGlow: "shadow-[inset_0_0_20px_rgba(16,185,129,0.05)]",
                    badge: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]",
                    glow: "bg-emerald-500/5",
                    icon: (
                        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )
                };
            case "Best Value":
                return {
                    accent: "text-amber-400",
                    border: "border-amber-500/20",
                    heavyBorder: "border-amber-500/30",
                    innerGlow: "shadow-[inset_0_0_20px_rgba(245,158,11,0.05)]",
                    badge: "bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]",
                    glow: "bg-amber-500/5",
                    icon: (
                        <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    )
                };
            case "Premium Choice":
                return {
                    accent: "text-indigo-400",
                    border: "border-indigo-500/20",
                    heavyBorder: "border-indigo-500/30",
                    innerGlow: "shadow-[inset_0_0_20px_rgba(99,102,241,0.05)]",
                    badge: "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.2)]",
                    glow: "bg-indigo-500/5",
                    icon: (
                        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    )
                };
            default:
                return {
                    accent: "text-blue-400",
                    border: "border-gray-800",
                    heavyBorder: "border-gray-700",
                    innerGlow: "",
                    badge: "bg-gray-800 text-gray-300",
                    glow: "bg-blue-500/5",
                    icon: null
                };
        }
    };

    const generateAffiliateLinks = (laptopName: string) => {
        const amazonTag = process.env.NEXT_PUBLIC_AMAZON_TAG || "youraffiliateid"; // e.g. "pickmylaptop-21"
        const flipkartAffId = process.env.NEXT_PUBLIC_FLIPKART_TAG || "youraffid"; // e.g. "pickmylaptop"

        return {
            amazon: `https://www.amazon.in/s?k=${encodeURIComponent(laptopName)}&tag=${amazonTag}`,
            flipkart: `https://www.flipkart.com/search?q=${encodeURIComponent(laptopName)}&affid=${flipkartAffId}`,
        };
    };

    return (
        <div className="w-full max-w-[1400px] mx-auto px-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    AI Analysis Complete
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                    Perfect Matches Found
                </h1>
                <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                    We've analyzed multiple options to find these top 3 laptops tailored to your specific needs.
                </p>

                <button
                    onClick={expandedCards.size === 3 ? collapseAll : expandAll}
                    className="text-sm text-gray-500 hover:text-white transition-colors underline underline-offset-4"
                >
                    {expandedCards.size === 3 ? "Collapse all details" : "Expand all details"}
                </button>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {recommendations.map((rec, index) => {
                    const config = getTierConfig(rec.tier);
                    const links = generateAffiliateLinks(rec.laptopName);
                    const isExpanded = expandedCards.has(index);
                    const isRecommended = rec.tier === "Best Value";

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className={`group relative h-full flex ${isRecommended ? 'lg:scale-105 lg:-mt-4 z-10' : ''}`}
                        >
                            {/* Card Container */}
                            <div className={`w-full flex flex-col bg-[#0f0f12] border-2 rounded-[2rem] p-8 transition-all duration-300 relative overflow-hidden ${config.heavyBorder} ${isRecommended ? 'shadow-2xl shadow-black/60 scale-[1.01]' : 'shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-black/50 hover:scale-[1.01]'}`}>

                                {/* Inner Glow Depth Effect */}
                                <div className={`absolute inset-0 pointer-events-none rounded-[2rem] ${config.innerGlow}`} />

                                {/* Badge (Top Right Pill) */}
                                <div className="absolute top-8 right-8 z-20">
                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase ${config.badge}`}>
                                        {rec.tier}
                                    </span>
                                </div>

                                {/* Header (Icon + Title) */}
                                <div className="relative z-10 mb-8">
                                    <div className={`w-14 h-14 rounded-2xl bg-[#131316] flex items-center justify-center border border-white/5 mb-6 shadow-inner`}>
                                        {config.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 leading-snug min-h-[4rem]">
                                        {rec.laptopName}
                                    </h3>

                                    <p className="text-sm text-gray-400 leading-relaxed min-h-[3rem] line-clamp-2">
                                        {rec.bestFor}
                                    </p>
                                </div>

                                {/* Features List (Bullets) */}
                                <div className="flex-1 relative z-10 space-y-5 mb-8">
                                    {rec.whyBest.slice(0, 4).map((point, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <span className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 shadow-sm ${rec.tier === "Budget Pick" ? "bg-emerald-400 shadow-emerald-900/50" :
                                                rec.tier === "Best Value" ? "bg-amber-400 shadow-amber-900/50" :
                                                    "bg-indigo-400 shadow-indigo-900/50"
                                                }`} />
                                            <span className="text-sm text-gray-300 leading-relaxed font-medium tracking-wide">{point}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Specs Expandable */}
                                <div className="relative z-10 border-t-2 border-[#1a1a20] pt-6 mb-8">
                                    {/* Expert Note - New Feature */}
                                    {rec.expertNote && (
                                        <div className="mb-6 p-4 rounded-xl bg-[#16161a] border border-white/5 flex gap-3">
                                            <div className="mt-0.5 min-w-[1.25rem]">
                                                <span className="text-lg">💡</span>
                                            </div>
                                            <div>
                                                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Expert Insight</h4>
                                                <p className="text-sm text-gray-300 leading-relaxed italic">"{rec.expertNote}"</p>
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => toggleCard(index)}
                                        className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider mb-4 group/btn"
                                    >
                                        <span>{isExpanded ? "Hide Specs" : "View Specs"}</span>
                                        <svg className={`w-4 h-4 transition-transform group-hover/btn:translate-y-0.5 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <motion.div
                                        initial={false}
                                        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="grid grid-cols-1 gap-3 pb-2 bg-[#131316] rounded-xl p-4 border border-white/5">
                                            {Object.entries(rec.specs).map(([key, value]) => (
                                                <div key={key} className="flex justify-between items-center text-xs border-b border-gray-800/30 pb-2 last:border-0 last:pb-0">
                                                    <span className="text-gray-500 capitalize font-bold">{key}</span>
                                                    <span className="text-gray-200 font-semibold text-right max-w-[65%]">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Footer (Price + Button) */}
                                <div className="relative z-10 mt-auto">
                                    <div className="mb-5">
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Starting from</p>
                                        <p className="text-2xl font-bold text-white tracking-tight">{rec.price}</p>
                                    </div>

                                    <div className="flex gap-3">
                                        <a
                                            href={links.amazon}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center h-11 rounded-xl bg-[#FF9900] hover:bg-[#ffad33] text-black font-bold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-900/20"
                                        >
                                            Amazon
                                        </a>
                                        <a
                                            href={links.flipkart}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center h-11 rounded-xl bg-[#2874F0] hover:bg-[#4383ee] text-white font-bold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-900/20"
                                        >
                                            Flipkart
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Start Over Action */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center pb-8"
            >
                <button
                    onClick={onStartOver}
                    className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors px-6 py-3 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    Start Over
                </button>
            </motion.div>

            {/* Disclaimer */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center text-[10px] text-gray-600 pb-8"
            >
                Disclosure: We may earn a commission from purchases made through affiliate links.
            </motion.p>
        </div>
    );
}
