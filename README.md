# LaptopFinder AI 🎯

An AI-powered laptop recommendation web application that helps users find their perfect laptop based on their needs, budget, and preferences.

![LaptopFinder AI](https://via.placeholder.com/800x400?text=LaptopFinder+AI)

## ✨ Features

- **🤖 AI-Powered Recommendations** - Uses OpenAI GPT to analyze your needs and suggest the best laptop
- **📱 Mobile-First Design** - Beautiful, responsive UI that works on all devices
- **🎯 Simple Questionnaire** - 8 easy questions with one-tap answers
- **🇮🇳 India-Focused** - Recommendations for laptops available in the Indian market
- **🛒 Quick Purchase Links** - Direct links to Amazon and Flipkart

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd laptop-recommender
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Edit .env.local and add your OpenAI API key
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
laptop-recommender/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── recommend/
│   │   │       └── route.ts      # AI recommendation API
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Main page
│   ├── components/
│   │   ├── LoadingScreen.tsx     # Loading animation
│   │   ├── OptionButton.tsx      # Answer option button
│   │   ├── ProgressBar.tsx       # Progress indicator
│   │   ├── QuestionCard.tsx      # Question display
│   │   └── RecommendationCard.tsx # Result display
│   └── lib/
│       └── questions.ts          # Question configuration
├── .env.example                  # Environment template
├── .env.local                    # Your environment variables (create this)
├── package.json
└── README.md
```

## 🎨 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **AI:** OpenAI GPT-4o-mini
- **Language:** TypeScript

## 📝 Questionnaire Flow

1. **Usage** - Study, Office, Programming, Gaming, Editing, Daily use
2. **Budget** - ₹25K-35K, ₹35K-50K, ₹50K-70K, ₹70K-1L, ₹1L+
3. **Speed** - Basic, Smooth, Very Fast
4. **Portability** - Often, Sometimes, Rarely
5. **Battery** - Very Important, Moderate, Not Important
6. **Screen Size** - Small (13-14"), Big (15-16"), Not Sure
7. **Brand** - HP, Dell, Lenovo, ASUS, Acer, Apple, No Preference
8. **Priority** - Performance, Battery, Value, Future-proof

## 🔗 Affiliate Links

The app generates affiliate links to Amazon and Flipkart. To use your own affiliate IDs:

1. Open `src/components/RecommendationCard.tsx`
2. Update the affiliate URL templates:
   ```typescript
   const amazonUrl = `https://www.amazon.in/s?k=${encodeURIComponent(laptopName)}&tag=YOUR_AMAZON_TAG`;
   const flipkartUrl = `https://www.flipkart.com/search?q=${encodeURIComponent(laptopName)}&affid=YOUR_FLIPKART_ID`;
   ```

## 🔑 API Key Setup

1. Get an OpenAI API key from [platform.openai.com](https://platform.openai.com)
2. Create `.env.local` in the project root
3. Add: `OPENAI_API_KEY=sk-your-key-here`

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

---

Built with ❤️ using Next.js and OpenAI
