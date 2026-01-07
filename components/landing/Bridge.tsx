"use client"

import { GeistSans } from "geist/font/sans"
import { Instrument_Serif } from "next/font/google"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ArrowRight, ShoppingCart, Wifi, ShieldCheck, Layers, Users } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner"

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
})

export default function Bridge() {
    return (
        <section id="bridge" className={cn(
            "relative w-full py-16 md:py-32 bg-transparent overflow-hidden",
            GeistSans.className
        )}>
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-100 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-50 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* Left Side - Image */}
                    <div className="relative order-1 md:order-1 flex justify-center md:justify-start">
                        <div className="relative w-full max-w-[300px] md:max-w-[420px] aspect-square">
                            {/* Ambient Glow */}
                            <div className="absolute inset-10 bg-gradient-to-tr from-zinc-200 to-transparent blur-2xl rounded-full opacity-70" />

                            {/* Device Image */}
                            <div className="relative w-full h-full z-10 transition-transform duration-700 hover:scale-[1.02]">
                                <Image
                                    src="/bridge.svg"
                                    alt="Dairytrix Bridge Hardware"
                                    fill
                                    className="object-contain drop-shadow-2xl rounded-[2.5rem]"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-2 text-left">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-widest mb-4">
                                Hardware Products
                            </span>
                            <h2 className={cn(
                                instrumentSerif.className,
                                "text-4xl md:text-5xl lg:text-6xl text-zinc-900 mb-6 leading-[1.1]"
                            )}>
                                Meet Dairytrix Bridge.
                            </h2>
                            <p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-medium max-w-lg mx-auto md:mx-0">
                                Seamlessly connect your milk analyzers to the Dairytrix software. High-speed data transfer that simplifies milk logging and eliminates manual entry errors.
                            </p>
                        </div>

                        {/* Feature Points */}
                        <div className="grid gap-4 py-2 w-full">
                            <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
                                <div className="p-2 bg-zinc-100 rounded-lg text-zinc-900 shrink-0">
                                    <Wifi size={20} />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-sm font-bold text-zinc-900">Real-time Analyzer Sync</h4>
                                    <p className="text-xs text-zinc-500 font-medium">Connects instantly to milk analyzers</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
                                <div className="p-2 bg-zinc-100 rounded-lg text-zinc-900 shrink-0">
                                    <Layers size={20} />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-sm font-bold text-zinc-900">Direct Software Transfer</h4>
                                    <p className="text-xs text-zinc-500 font-medium">Instantly pushes analyzer data to Dairytrix software</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
                                <div className="p-2 bg-zinc-100 rounded-lg text-zinc-900 shrink-0">
                                    <Users size={20} />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-sm font-bold text-zinc-900">Smart Queue Management</h4>
                                    <p className="text-xs text-zinc-500 font-medium">Organize farmer flow & reduce waiting</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
                                <div className="p-2 bg-zinc-100 rounded-lg text-zinc-900 shrink-0">
                                    <ShieldCheck size={20} />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-sm font-bold text-zinc-900">Simple Milk Logging</h4>
                                    <p className="text-xs text-zinc-500 font-medium">Automate entries and eliminate manual paperwork</p>
                                </div>
                            </div>
                        </div>

                        {/* CTAs */}
                        {/* CTAs */}
                        <TooltipProvider delayDuration={100}>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full md:w-auto">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button
                                            onClick={() => toast("Dairytrix Bridge will be available soon 🚀")}
                                            className="appearance-none border-0 outline-none ring-0 flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-black text-white font-bold rounded-2xl hover:bg-zinc-900 transition-all !shadow-none md:!shadow-xl active:scale-95 group cursor-pointer w-full sm:w-auto transform-gpu"
                                        >
                                            <ShoppingCart size={18} />
                                            Order Bridge
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-zinc-900 text-white border-zinc-800">
                                        <p className="font-medium">Dairytrix Bridge will be available soon 🚀</p>
                                    </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button
                                            onClick={() => toast("Detailed specifications coming soon")}
                                            className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-2xl hover:bg-zinc-50 transition-all active:scale-95 group hover:border-zinc-300 cursor-pointer w-full sm:w-auto"
                                        >
                                            Learn More
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-zinc-900 text-white border-zinc-800">
                                        <p className="font-medium">Detailed specifications coming soon</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </TooltipProvider>
                    </div>

                </div>
            </div>
        </section>
    )
}
