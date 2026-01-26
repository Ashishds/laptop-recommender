import { NextResponse } from "next/server";
import OpenAI from "openai";

const SYSTEM_PROMPT = `You are an expert laptop consultant who explains things in very simple, non-technical language.

Your goal is to recommend the THREE BEST LAPTOPS for the user based on their needs, budget, and priorities.

Rules:
1. Always stay within or slightly below the user's budget for Budget Pick.
2. Best Value should be at the user's budget.
3. Premium Choice can be 10-20% above budget if it offers significantly better value.
4. Recommend laptops available in the Indian market.
5. Prefer newer generation processors and SSD storage only.
6. Avoid outdated or poor value-for-money models.
7. Do not use confusing technical jargon.
8. If the user is unsure, make smart decisions for them.

Each recommendation section must:
- Be written for non-technical users
- Use simple daily-life language
- Focus on benefits, not specs
- Explain how the laptop will feel in daily use

Output format must be STRICT JSON:

{
  "recommendations": [
    {
      "tier": "Budget Pick",
      "tierEmoji": "🥉",
      "laptopName": "Full laptop name with variant",
      "price": "₹XX,XXX",
      "whyBest": ["4-6 short bullet points in simple language"],
      "specs": {
        "processor": "...",
        "ram": "...",
        "storage": "...",
        "graphics": "...",
        "display": "...",
        "battery": "...",
        "weight": "..."
      },
      "bestFor": "Plain-language description",
      "limitations": ["1-2 honest limitations"]
    },
    {
      "tier": "Best Value",
      "tierEmoji": "🥇",
      "laptopName": "...",
      "price": "...",
      "whyBest": ["..."],
      "specs": {...},
      "bestFor": "...",
      "limitations": ["..."]
    },
    {
      "tier": "Premium Choice",
      "tierEmoji": "👑",
      "laptopName": "...",
      "price": "...",
      "whyBest": ["..."],
      "specs": {...},
      "bestFor": "...",
      "limitations": ["..."]
    }
  ]
}

Return ONLY valid JSON. Do not add markdown formatting or extra text.`;

export async function POST(request: Request) {
    try {
        const { answers } = await request.json();

        if (!answers || typeof answers !== "object") {
            return NextResponse.json(
                { error: "Invalid request: answers required" },
                { status: 400 }
            );
        }

        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: "OpenAI API key not configured" },
                { status: 500 }
            );
        }

        const openai = new OpenAI({ apiKey });

        // Build user prompt from answers
        const userPrompt = buildUserPrompt(answers);

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: userPrompt },
            ],
            temperature: 0.7,
            max_tokens: 2500,
        });

        const responseText = completion.choices[0]?.message?.content;

        if (!responseText) {
            return NextResponse.json(
                { error: "Failed to generate recommendation" },
                { status: 500 }
            );
        }

        // Parse JSON response
        try {
            // Clean the response - remove markdown code blocks if present
            const cleanedResponse = responseText
                .replace(/```json\n?/g, '')
                .replace(/```\n?/g, '')
                .trim();

            const data = JSON.parse(cleanedResponse);

            return NextResponse.json({
                recommendations: data.recommendations,
            });
        } catch {
            console.error("Failed to parse AI response:", responseText);
            return NextResponse.json(
                { error: "Failed to parse recommendation response" },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Recommendation API error:", error);
        return NextResponse.json(
            { error: "Failed to process recommendation request" },
            { status: 500 }
        );
    }
}

function buildUserPrompt(answers: Record<string, string>): string {
    const usageMap: Record<string, string> = {
        study: "studying and online classes",
        office: "office work like documents, emails, and video calls",
        programming: "programming and software development",
        gaming: "gaming and streaming",
        editing: "video and photo editing",
        daily: "daily use like browsing, social media, and entertainment",
    };

    const speedMap: Record<string, string> = {
        basic: "basic performance for everyday tasks",
        smooth: "smooth and responsive performance",
        fast: "very fast performance for heavy work",
    };

    const portabilityMap: Record<string, string> = {
        often: "carry it around very often",
        sometimes: "carry it sometimes",
        rarely: "rarely carry it around",
    };

    const batteryMap: Record<string, string> = {
        very: "Battery life is very important - I need all-day battery",
        moderate: "Moderate battery life is fine - a few hours is enough",
        not: "Battery life is not important - I'm usually near a charger",
    };

    const screenMap: Record<string, string> = {
        small: "compact screen (13-14 inches)",
        big: "bigger screen (15-16 inches)",
        unsure: "you can decide the best screen size for my needs",
    };

    const priorityMap: Record<string, string> = {
        performance: "performance and speed",
        battery: "battery life",
        value: "value for money",
        future: "future-proofing for long-term use",
    };

    const usage = usageMap[answers.usage] || answers.usage;
    const budget = answers.budget;
    const speed = speedMap[answers.speed] || answers.speed;
    const portability = portabilityMap[answers.portability] || answers.portability;
    const battery = batteryMap[answers.battery] || answers.battery;
    const screen = screenMap[answers.screen] || answers.screen;
    const brand = answers.brand === "any" ? "no specific brand preference" : `prefers ${answers.brand} brand`;
    const priority = priorityMap[answers.priority] || answers.priority;

    return `I need a laptop recommendation based on these requirements:

- Main use: ${usage}
- Budget: ₹${budget} INR
- Speed expectation: ${speed}
- Portability: I will ${portability}
- ${battery}
- Screen preference: ${screen}
- Brand: ${brand}
- Top priority: ${priority}

Please recommend the three best laptops for me (Budget Pick, Best Value, Premium Choice).`;
}
