import { GeistSans } from "geist/font/sans"
import { Instrument_Serif } from "next/font/google"
import { cn } from "@/lib/utils"
import { Download } from "lucide-react"
import BirdsCanvas from "./BirdsCanvas"

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
})

export default function Hero() {
    return (
        <section className={cn(
            "relative min-h-screen w-full flex items-center justify-center overflow-hidden",
            GeistSans.className
        )}>
            {/* Background Image */}
            <img
                src="/hero-bg.svg"
                alt="Background"
                className="absolute bottom-0 left-0 w-full h-auto min-h-full object-cover object-left-bottom md:object-bottom blur-[2px] opacity-95"
            />

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/[0.01]" />

            {/* Interactive Minimal Birds */}
            <BirdsCanvas />

            {/* Main Hero Container - Centered on mobile, top-aligned and centered block on desktop */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-0 flex flex-col md:flex-row items-center md:items-start justify-center gap-2 md:gap-20 lg:gap-24">

                {/* Left Side: Text Section */}
                <div className="text-center md:text-left animate-in fade-in slide-in-from-left-8 duration-1000 relative">
                    {/* Subtle glow for mobile legibility */}
                    <div className="absolute inset-x-0 -inset-y-10 bg-white/10 blur-3xl md:hidden pointer-events-none" />

                    <h1 className={cn(
                        instrumentSerif.className,
                        "text-[#1a1a1a] text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] font-normal leading-[1.05] tracking-tight max-w-[15ch] mb-4 md:mb-16 relative drop-shadow-sm transition-all"
                    )}>
                        Smart Dairy Management,<br className="hidden lg:block" /> Made Simple
                    </h1>
                    <p className="text-zinc-800 text-base sm:text-lg max-w-sm mx-auto md:hidden mb-1 relative font-medium leading-relaxed drop-shadow-sm">
                        Manage milk collection, farmer records, payments, and daily operations — all from one app.
                    </p>
                </div>

                {/* Right Side: Phone Image (Hidden on Mobile) and Download Button Below */}
                <div className="flex flex-col items-center gap-0 md:gap-8 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                    {/* Responsive Image Size - Hidden on mobile */}
                    <div className="hidden md:block relative md:w-[200px] lg:w-[220px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                        <img
                            src="/phone-frame.svg"
                            alt="App Screenshot"
                            className="w-full h-auto rounded-[2rem]"
                        />
                    </div>

                    {/* Download Button perfectly aligned with image center */}
                    <div className="flex justify-center w-full">
                        <button className="flex items-center gap-3 px-8 md:px-10 py-3.5 md:py-4 bg-[#1a1a1a] text-white font-bold rounded-2xl hover:bg-black transition-all shadow-xl active:scale-95 tracking-wide whitespace-nowrap cursor-pointer group">
                            <Download size={20} />
                            DOWNLOAD APP
                        </button>
                    </div>
                </div>

            </div>

            {/* Foreground Image - Layered on top of heading and content */}
            <img
                src="/foreground.svg"
                alt="Foreground"
                className="absolute bottom-0 left-0 w-full h-auto min-h-full object-cover object-left-bottom md:object-bottom pointer-events-none z-20"
            />
        </section>
    )
}
