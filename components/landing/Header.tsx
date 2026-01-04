"use client"

import Link from "next/link"
import Image from "next/image"
import { GeistSans } from "geist/font/sans"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "T&C", href: "#terms-conditions" },
    { name: "Privacy", href: "#privacy" },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={cn(
            "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg md:max-w-4xl transition-all duration-500",
            GeistSans.className
        )}>
            <nav className={cn(
                "relative flex items-center justify-between px-4 md:px-6 py-2.5 transition-all duration-300",
                "bg-white/40 backdrop-blur-md border border-white/30 rounded-[2rem] shadow-lg",
                scrolled && "bg-white/70 shadow-xl border-white/40"
            )}>
                {/* Logo Section - Keeping logo as it is */}
                <Link href="/" className="flex items-center gap-2 active:scale-95 transition-transform">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                    <span className="font-bold text-zinc-900 tracking-tight text-lg hidden sm:block">Dairytrix</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-widest"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="#download"
                        className="px-5 py-2 bg-zinc-900 text-white text-xs font-bold rounded-full hover:bg-zinc-800 transition-all shadow-md"
                    >
                        GET APP
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-zinc-900 hover:bg-black/5 rounded-full transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Navigation Drawer */}
            <div className={cn(
                "absolute top-[calc(100%+0.5rem)] left-0 right-0 p-2 bg-white/80 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-2xl transition-all duration-300 origin-top md:hidden",
                isMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2 pointer-events-none"
            )}>
                <div className="flex flex-col gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-zinc-600 px-5 py-3.5 hover:bg-black/[0.03] rounded-[1.5rem] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="#download"
                        className="mt-1 w-full px-5 py-4 bg-zinc-900 text-white text-center text-sm font-bold rounded-[1.5rem] hover:bg-zinc-800 transition-all shadow-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Download the App
                    </Link>
                </div>
            </div>
        </header>
    )
}
