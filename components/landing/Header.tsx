"use client"

import Link from "next/link"
import Image from "next/image"
import { GeistSans } from "geist/font/sans"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from "react"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "T&C", href: "#terms-conditions" },
    { name: "Privacy", href: "#privacy" },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [hoveredProduct, setHoveredProduct] = useState<"app" | "bridge">("bridge")

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
                    <span className="font-bold text-zinc-900 tracking-tight text-lg">Dairytrix</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-zinc-100 data-[state=open]:bg-zinc-100 text-xs font-semibold text-zinc-500 hover:text-zinc-900 uppercase tracking-widest focus:bg-zinc-100 cursor-pointer rounded-full px-5 h-10 transition-colors">
                                    Products
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="flex md:w-[420px] lg:w-[460px] p-2 gap-2">
                                        {/* Left Side: Square Preview Only */}
                                        <div className="w-[42%] relative aspect-square rounded-[1rem] overflow-hidden group">
                                            <Image
                                                src={hoveredProduct === 'app' ? "/logo.svg" : "/bridge.svg"}
                                                alt="Product Preview"
                                                fill
                                                className={cn(
                                                    "transition-all duration-500 ease-in-out",
                                                    hoveredProduct === 'app' ? "object-contain p-2" : "object-cover scale-105 group-hover:scale-100"
                                                )}
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = "/logo.svg"
                                                }}
                                            />
                                        </div>

                                        {/* Right Side: Product Options */}
                                        <div className="flex-1 flex flex-col justify-center gap-1 pl-1">
                                            <ListItem
                                                title="Dairytrix Bridge"
                                                href="#bridge"
                                                onMouseEnter={() => setHoveredProduct('bridge')}
                                                className={cn(
                                                    "transition-all duration-200 py-3",
                                                    hoveredProduct === 'bridge' ? "bg-zinc-50" : "hover:bg-zinc-50/50"
                                                )}
                                            >
                                                IoT hardware for analyzer sync.
                                            </ListItem>
                                            <ListItem
                                                title="Dairytrix App"
                                                href="#app"
                                                onMouseEnter={() => setHoveredProduct('app')}
                                                className={cn(
                                                    "transition-all duration-200 py-3",
                                                    hoveredProduct === 'app' ? "bg-zinc-50" : "hover:bg-zinc-50/50"
                                                )}
                                            >
                                                Mobile & desktop ecosystem.
                                            </ListItem>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.name}>
                                    <Link href={item.href} legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(
                                            navigationMenuTriggerStyle(),
                                            "bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent",
                                            "text-xs font-semibold text-zinc-500 hover:text-zinc-900 uppercase tracking-widest px-3"
                                        )}>
                                            {item.name}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Link
                        href="#download"
                        className="ml-2 px-5 py-2 bg-zinc-900 text-white text-xs font-bold rounded-full hover:bg-zinc-800 transition-all shadow-md active:scale-95"
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
                    <div className="px-5 py-3 pt-4">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Products</span>
                    </div>
                    <Link
                        href="#app"
                        className="flex flex-col gap-0.5 px-5 py-3 hover:bg-black/[0.03] rounded-[1.5rem] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="text-sm font-semibold text-zinc-900">Dairytrix App</span>
                        <span className="text-[11px] text-zinc-500">Mobile and Desktop Platform</span>
                    </Link>
                    <Link
                        href="#bridge"
                        className="flex flex-col gap-0.5 px-5 py-3 hover:bg-black/[0.03] rounded-[1.5rem] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="text-sm font-semibold text-zinc-900">Dairytrix Bridge</span>
                        <span className="text-[11px] text-zinc-500">Smart IoT Hardware Device</span>
                    </Link>

                    <div className="my-2 border-t border-zinc-100/50" />

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
        </header >
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
    return (
        <NavigationMenuLink asChild>
            <a
                ref={ref}
                className={cn(
                    "block select-none space-y-1 rounded-[1rem] p-3 leading-none no-underline outline-none transition-all duration-200",
                    "hover:bg-zinc-50 hover:text-zinc-900 focus:bg-zinc-50 focus:text-zinc-900",
                    className
                )}
                {...props}
            >
                <div className="text-sm font-bold tracking-tight text-zinc-900">{title}</div>
                <p className="line-clamp-2 text-xs leading-snug text-zinc-500 font-medium">
                    {children}
                </p>
            </a>
        </NavigationMenuLink>
    )
})
ListItem.displayName = "ListItem"
