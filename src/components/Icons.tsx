export function LaptopFinderLogo({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Laptop base */}
            <rect
                x="4"
                y="10"
                width="32"
                height="20"
                rx="2"
                fill="url(#laptop-gradient)"
            />
            {/* Screen */}
            <rect
                x="6"
                y="12"
                width="28"
                height="14"
                rx="1"
                fill="#1e1e2e"
            />
            {/* Screen glow */}
            <rect
                x="8"
                y="14"
                width="24"
                height="10"
                rx="1"
                fill="url(#screen-gradient)"
                opacity="0.8"
            />
            {/* Keyboard base */}
            <path
                d="M2 30h36v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2z"
                fill="url(#keyboard-gradient)"
            />
            {/* AI sparkle */}
            <circle cx="32" cy="8" r="3" fill="url(#sparkle-gradient)" />
            <circle cx="32" cy="8" r="5" fill="url(#sparkle-gradient)" opacity="0.3" />

            <defs>
                <linearGradient id="laptop-gradient" x1="4" y1="10" x2="36" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="screen-gradient" x1="8" y1="14" x2="32" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#818cf8" />
                    <stop offset="1" stopColor="#c084fc" />
                </linearGradient>
                <linearGradient id="keyboard-gradient" x1="2" y1="30" x2="38" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5" />
                    <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
                <linearGradient id="sparkle-gradient" x1="29" y1="5" x2="35" y2="11" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fbbf24" />
                    <stop offset="1" stopColor="#f97316" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function AmazonLogo({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 30" className={className} fill="currentColor">
            <path d="M62.4 21.8c-5.8 4.3-14.2 6.6-21.4 6.6-10.1 0-19.2-3.7-26.1-10-.5-.5-.1-1.1.6-.7 7.4 4.3 16.6 6.9 26.1 6.9 6.4 0 13.4-1.3 19.9-4.1 1-.4 1.8.6.9 1.3z" />
            <path d="M64.9 19c-.7-.9-4.8-.4-6.6-.2-.6.1-.7-.4-.1-.8 3.2-2.3 8.6-1.6 9.2-.9.6.8-.2 6.2-3.2 8.8-.5.4-.9.2-.7-.3.7-1.7 2.1-5.7 1.4-6.6z" />
            <path d="M58.5 3.4V1.1c0-.4.3-.6.6-.6h10.7c.4 0 .6.3.6.6v2c0 .4-.3.8-.9 1.6l-5.5 7.9c2.1 0 4.2.3 6.1 1.4.4.2.5.6.5 1v2.4c0 .4-.4.8-.8.6-3.5-1.8-8.1-2-12 .1-.4.2-.8-.2-.8-.6V15c0-.4 0-1.2.4-1.8l6.4-9.2h-5.6c-.4 0-.7-.3-.7-.6z" />
            <path d="M21.3 17.7h-3.3c-.3 0-.6-.2-.6-.5V1.1c0-.4.3-.6.7-.6h3c.3 0 .6.2.6.5v2.1h.1c.8-2 2.4-2.9 4.5-2.9 2.2 0 3.5 1 4.5 2.9.8-2 2.6-2.9 4.7-2.9 1.4 0 3 .6 3.9 1.9 1.1 1.5.9 3.6.9 5.5v9.5c0 .4-.3.6-.7.6h-3.3c-.4 0-.6-.3-.6-.6V8.6c0-.7.1-2.6-.1-3.3-.2-1.1-.9-1.5-1.8-1.5-.8 0-1.6.5-1.9 1.3-.3.8-.3 2.2-.3 3.5v8.5c0 .4-.3.6-.7.6h-3.3c-.4 0-.6-.3-.6-.6l-.1-8.5c0-1.9.3-4.7-1.9-4.7-2.2 0-2.1 2.7-2.1 4.7v8.5c0 .4-.3.6-.7.6z" />
            <path d="M47.5.2c4.9 0 7.5 4.2 7.5 9.5 0 5.1-2.9 9.2-7.5 9.2-4.8 0-7.4-4.2-7.4-9.4-.1-5.2 2.6-9.3 7.4-9.3zm0 3.4c-2.4 0-2.6 3.3-2.6 5.4 0 2 0 6.4 2.5 6.4 2.5 0 2.6-3.5 2.6-5.6 0-1.4-.1-3.1-.5-4.4-.3-1.2-1-1.8-2-1.8z" />
            <path d="M12.3 17.7H9c-.3 0-.6-.2-.6-.5L8.3.7c0-.4.3-.6.7-.6h3.1c.3 0 .5.2.6.5v2.5h.1C13.5 1.2 14.8 0 17.2 0c1.5 0 3 .5 4 2 .9 1.4.9 3.7.9 5.4v9.8c0 .3-.3.6-.7.6H18c-.3 0-.6-.2-.6-.5V8.5c0-1.9.2-4.6-2-4.6-.8 0-1.5.5-1.8 1.3-.4 1-.5 2-.5 3v9c-.1.3-.4.5-.8.5z" />
        </svg>
    );
}

export function FlipkartLogo({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 30" className={className} fill="currentColor">
            <path d="M10.3 6.6h7.3v2.8H13v3.4h4v2.8h-4V22h-2.7V6.6zm11.1 0h2.7V22h-2.7V6.6zm5.9 0h2.7V19h4.6V22H27.3V6.6zm10.6 0h2.7v6.1h.1c.6-1.1 1.8-1.8 3.1-1.8 2.9 0 4.6 2.5 4.6 5.3 0 2.9-1.7 5.4-4.7 5.4-1.2 0-2.4-.6-3.1-1.7h-.1V22h-2.6V6.6zm5.1 8.1c-1.5 0-2.5 1.2-2.5 2.8s1 2.8 2.5 2.8 2.5-1.2 2.5-2.8-1-2.8-2.5-2.8zm7.2-3.5h2.6v2h.1c.5-1.4 1.6-2.3 3.2-2.3.3 0 .6 0 .9.1v2.5c-.4-.1-.9-.2-1.3-.2-1.8 0-2.8 1.2-2.8 3.4V22h-2.7v-10.8zm10 2.1v6.2c0 .8.4 1.2 1.1 1.2.5 0 .9-.1 1.3-.3l.1 2.2c-.6.3-1.3.5-2 .5-2.4 0-3.2-1.1-3.2-3.3v-6.5h-1.6v-2.1h1.6V8.7h2.7v2.5h2.4v2.1h-2.4z" />
        </svg>
    );
}

export function HeroIllustration({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background circles */}
            <circle cx="200" cy="150" r="120" fill="url(#hero-bg-1)" opacity="0.1" />
            <circle cx="200" cy="150" r="80" fill="url(#hero-bg-2)" opacity="0.15" />

            {/* Single centered laptop */}
            <g transform="translate(125, 85)">
                <rect width="150" height="95" rx="6" fill="url(#laptop-main-gradient)" />
                <rect x="6" y="6" width="138" height="75" rx="3" fill="#1e1e2e" />
                <rect x="12" y="12" width="126" height="63" rx="3" fill="url(#laptop-screen-1)" />
                {/* Screen content */}
                <rect x="20" y="25" width="40" height="4" rx="2" fill="#fff" opacity="0.6" />
                <rect x="20" y="35" width="60" height="4" rx="2" fill="#fff" opacity="0.4" />
                <rect x="20" y="45" width="50" height="4" rx="2" fill="#fff" opacity="0.3" />
                <rect x="90" y="25" width="40" height="30" rx="2" fill="#818cf8" opacity="0.5" />
                {/* Keyboard */}
                <rect x="-8" y="95" width="166" height="12" rx="3" fill="url(#keyboard-main-gradient)" />
            </g>

            {/* AI Brain icon */}
            <g transform="translate(160, 195)">
                <circle cx="40" cy="25" r="30" fill="url(#ai-gradient)" opacity="0.2" />
                <circle cx="40" cy="25" r="22" fill="url(#ai-gradient)" />
                <text x="40" y="32" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">AI</text>
            </g>

            {/* Sparkles */}
            <circle cx="100" cy="80" r="4" fill="#fbbf24" />
            <circle cx="300" cy="100" r="3" fill="#ec4899" />
            <circle cx="320" cy="200" r="5" fill="#a855f7" />
            <circle cx="80" cy="200" r="4" fill="#6366f1" />

            {/* Connection line from laptop to AI */}
            <path d="M200 180 L200 205" stroke="url(#ai-gradient)" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />

            <defs>
                <linearGradient id="hero-bg-1" x1="80" y1="30" x2="320" y2="270" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="hero-bg-2" x1="120" y1="70" x2="280" y2="230" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a855f7" />
                    <stop offset="1" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient id="laptop-main-gradient" x1="0" y1="0" x2="150" y2="95" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="laptop-screen-1" x1="12" y1="12" x2="138" y2="75" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#312e81" />
                    <stop offset="1" stopColor="#4c1d95" />
                </linearGradient>
                <linearGradient id="keyboard-main-gradient" x1="-8" y1="95" x2="158" y2="107" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5" />
                    <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
                <linearGradient id="ai-gradient" x1="15" y1="0" x2="65" y2="50" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop offset="0.5" stopColor="#a855f7" />
                    <stop offset="1" stopColor="#ec4899" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function LoadingLaptop({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 120 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Laptop body */}
            <rect x="10" y="15" width="100" height="60" rx="4" fill="url(#loading-laptop-body)" />
            {/* Screen */}
            <rect x="15" y="20" width="90" height="45" rx="2" fill="#1e1e2e" />
            {/* Screen content - animated bars */}
            <rect x="25" y="30" width="30" height="4" rx="2" fill="#6366f1" opacity="0.8">
                <animate attributeName="width" values="30;50;30" dur="1.5s" repeatCount="indefinite" />
            </rect>
            <rect x="25" y="40" width="50" height="4" rx="2" fill="#a855f7" opacity="0.6">
                <animate attributeName="width" values="50;30;50" dur="1.5s" repeatCount="indefinite" />
            </rect>
            <rect x="25" y="50" width="40" height="4" rx="2" fill="#ec4899" opacity="0.4">
                <animate attributeName="width" values="40;60;40" dur="1.5s" repeatCount="indefinite" />
            </rect>
            {/* Keyboard */}
            <rect x="5" y="75" width="110" height="10" rx="3" fill="url(#loading-keyboard)" />
            {/* Camera dot */}
            <circle cx="60" cy="18" r="2" fill="#4ade80" />

            <defs>
                <linearGradient id="loading-laptop-body" x1="10" y1="15" x2="110" y2="75" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="loading-keyboard" x1="5" y1="75" x2="115" y2="85" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5" />
                    <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
            </defs>
        </svg>
    );
}
