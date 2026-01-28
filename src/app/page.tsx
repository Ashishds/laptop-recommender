"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { questions } from "@/lib/questions";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import LoadingScreen from "@/components/LoadingScreen";
import RecommendationsGrid from "@/components/RecommendationsGrid";
import ShareButtons from "@/components/ShareButtons";
import Image from "next/image";

type AppState = "welcome" | "questionnaire" | "loading" | "result" | "error";

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
}

export default function Home() {
  const [state, setState] = useState<AppState>("welcome");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [error, setError] = useState("");

  const handleStart = () => {
    setState("questionnaire");
  };

  const handleSelect = async (value: string) => {
    const currentQuestion = questions[currentStep];
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    await new Promise((resolve) => setTimeout(resolve, 200));

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit(newAnswers);
    }
  };

  const handleSubmit = async (finalAnswers: Record<string, string>) => {
    setState("loading");

    try {
      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: finalAnswers }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get recommendation");
      }

      setRecommendations(data.recommendations);
      setState("result");
    } catch (err) {
      console.error("Error:", err);
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  };

  const handleStartOver = () => {
    setAnswers({});
    setCurrentStep(0);
    setRecommendations([]);
    setError("");
    setState("welcome");
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1020]">
      {/* Header */}
      <header className="w-full py-4 px-6 flex items-center justify-between border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/images/logo.png"
              alt="PickMyLaptop Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white leading-tight tracking-tight">
              PickMy<span className="text-indigo-400">Laptop</span>
            </span>
            <span className="text-[10px] text-indigo-400 font-bold tracking-[0.2em]">POWERED BY AI</span>
          </div>
        </div>

        {state === "questionnaire" && currentStep > 0 && (
          <button
            onClick={handleBack}
            className="text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors flex items-center gap-1.5 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {/* Welcome Screen */}
          {state === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center max-w-2xl mx-auto"
            >
              {/* New Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8 relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
                <Image
                  src="/images/hero-banner.png"
                  alt="Modern futuristic laptop"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1]">
                <span className="text-white">Find Your Perfect </span>
                <span className="text-gradient">Laptop</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto">
                No more confusing specs. Our AI finds the top 3 laptops specifically tailored for your work, budget, and lifestyle.
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {[
                  { icon: "⚡", text: "30 Seconds" },
                  { icon: "🎯", text: "3 Recommendations" },
                  { icon: "🇮🇳", text: "Indian Prices" },
                ].map((tag) => (
                  <span
                    key={tag.text}
                    className="px-4 py-2 rounded-full bg-[#161E2E] border border-[#1F2937] text-[#9CA3AF] text-sm"
                  >
                    {tag.icon} {tag.text}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={handleStart}
                className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg transition-all shadow-lg shadow-indigo-500/25 hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto"
              >
                Start AI Analysis
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>

              <p className="mt-8 text-[#6B7280] text-sm">
                No sign-up required • 100% free
              </p>
            </motion.div>
          )}

          {/* Questionnaire */}
          {state === "questionnaire" && (
            <motion.div
              key="questionnaire"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-xl mx-auto"
            >
              <ProgressBar currentStep={currentStep} totalSteps={questions.length} />
              <QuestionCard
                question={questions[currentStep]}
                selectedValue={answers[questions[currentStep].id] || ""}
                onSelect={handleSelect}
              />
            </motion.div>
          )}

          {/* Loading */}
          {state === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoadingScreen />
            </motion.div>
          )}

          {/* Result */}
          {state === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-6xl"
            >
              <RecommendationsGrid
                recommendations={recommendations}
                onStartOver={handleStartOver}
              />
            </motion.div>
          )}

          {/* Error */}
          {state === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center max-w-md mx-auto"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-[#E5E7EB] mb-3">Something went wrong</h2>
              <p className="text-[#9CA3AF] mb-6">{error}</p>
              <button
                onClick={handleStartOver}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
              >
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-[#1F2937] bg-[#111827]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <ShareButtons />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <div className="relative w-6 h-6 opacity-80">
                <Image src="/images/logo.png" alt="PickMyLaptop" fill className="object-contain" />
              </div>
              <span className="font-semibold text-slate-400">© 2025 PickMyLaptop</span>
            </div>
            <div className="flex gap-6">
              <span className="hover:text-slate-300 transition-colors cursor-default">Privacy</span>
              <span className="hover:text-slate-300 transition-colors cursor-default">Terms</span>
            </div>
            <span className="text-xs italic">Prices are estimates • Check seller for final price</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
