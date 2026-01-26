export interface Question {
  id: string;
  question: string;
  subtitle?: string;
  options: QuestionOption[];
}

export interface QuestionOption {
  value: string;
  label: string;
  icon: string;
  description?: string;
}

export const questions: Question[] = [
  {
    id: "usage",
    question: "What will you mainly use this laptop for?",
    subtitle: "Pick the one that matches your primary need",
    options: [
      { value: "study", label: "Study", icon: "📚", description: "Notes, research, online classes" },
      { value: "office", label: "Office Work", icon: "💼", description: "Documents, emails, meetings" },
      { value: "programming", label: "Programming", icon: "💻", description: "Coding, development, testing" },
      { value: "gaming", label: "Gaming", icon: "🎮", description: "Playing games, streaming" },
      { value: "editing", label: "Video/Photo Editing", icon: "🎬", description: "Creative work, design" },
      { value: "daily", label: "Daily Use", icon: "🏠", description: "Browsing, entertainment, social media" },
    ],
  },
  {
    id: "budget",
    question: "What's your budget?",
    subtitle: "We'll find the best laptop within your range",
    options: [
      { value: "25000-35000", label: "₹25,000 - ₹35,000", icon: "💰", description: "Budget-friendly" },
      { value: "35000-50000", label: "₹35,000 - ₹50,000", icon: "💵", description: "Mid-range" },
      { value: "50000-70000", label: "₹50,000 - ₹70,000", icon: "💎", description: "Upper mid-range" },
      { value: "70000-100000", label: "₹70,000 - ₹1,00,000", icon: "👑", description: "Premium" },
      { value: "100000+", label: "₹1,00,000+", icon: "🚀", description: "High-end" },
    ],
  },
  {
    id: "speed",
    question: "How fast should your laptop be?",
    subtitle: "This affects performance and price",
    options: [
      { value: "basic", label: "Basic", icon: "🚶", description: "Handles everyday tasks smoothly" },
      { value: "smooth", label: "Smooth", icon: "🏃", description: "Quick and responsive" },
      { value: "fast", label: "Very Fast", icon: "⚡", description: "Lightning-fast for heavy work" },
    ],
  },
  {
    id: "portability",
    question: "How often will you carry it around?",
    subtitle: "This helps us recommend the right weight",
    options: [
      { value: "often", label: "Very Often", icon: "🎒", description: "Daily commute, travel" },
      { value: "sometimes", label: "Sometimes", icon: "🏢", description: "Occasional trips" },
      { value: "rarely", label: "Rarely", icon: "🏠", description: "Mostly stays at home/office" },
    ],
  },
  {
    id: "battery",
    question: "How important is battery life?",
    subtitle: "Longer battery usually means less power",
    options: [
      { value: "very", label: "Very Important", icon: "🔋", description: "Need all-day battery" },
      { value: "moderate", label: "Moderate", icon: "⚖️", description: "A few hours is fine" },
      { value: "not", label: "Not Important", icon: "🔌", description: "Always near a charger" },
    ],
  },
  {
    id: "screen",
    question: "What screen size do you prefer?",
    subtitle: "Bigger screen = Less portable",
    options: [
      { value: "small", label: "Small (13-14\")", icon: "📱", description: "Compact and light" },
      { value: "big", label: "Big (15-16\")", icon: "🖥️", description: "Better for work" },
      { value: "unsure", label: "Not Sure", icon: "🤔", description: "Let AI decide" },
    ],
  },
  {
    id: "brand",
    question: "Any brand preference?",
    subtitle: "Optional - skip if you're open to all brands",
    options: [
      { value: "hp", label: "HP", icon: "🔵" },
      { value: "dell", label: "Dell", icon: "🔷" },
      { value: "lenovo", label: "Lenovo", icon: "🔴" },
      { value: "asus", label: "ASUS", icon: "🟣" },
      { value: "acer", label: "Acer", icon: "🟢" },
      { value: "apple", label: "Apple", icon: "🍎" },
      { value: "any", label: "No Preference", icon: "✨", description: "Open to all brands" },
    ],
  },
  {
    id: "priority",
    question: "What matters most to you?",
    subtitle: "This is your final priority",
    options: [
      { value: "performance", label: "Performance", icon: "🚀", description: "Speed and power" },
      { value: "battery", label: "Battery Life", icon: "🔋", description: "Long-lasting charge" },
      { value: "value", label: "Value for Money", icon: "💰", description: "Best bang for buck" },
      { value: "future", label: "Future-proof", icon: "🔮", description: "Lasts for years" },
    ],
  },
];
