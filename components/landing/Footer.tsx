"use client"

import Link from "next/link"
import Image from "next/image"
import { GeistSans } from "geist/font/sans"
import { cn } from "@/lib/utils"
import { Youtube } from "lucide-react"

const footerLinks = {
    product: [
        { name: "Bridge", href: "#bridge" },
        { name: "App", href: "#app" },
        { name: "Pricing", href: "#pricing" },
    ],
    company: [
        { name: "About", href: "#about" },
        { name: "T&C", href: "#terms-conditions" },
        { name: "Privacy", href: "#privacy" },
    ],
    social: [
        { icon: Youtube, href: "#", name: "YouTube" },
    ]
}

export default function Footer() {
    return (
        <footer className={cn(
            "relative w-full bg-white/50 pt-28 pb-16 md:pt-40 md:pb-20 overflow-hidden",
            GeistSans.className
        )}>
            {/* Background Image */}
            <img
                src="/footer-bg.svg"
                alt="Footer Background"
                className="absolute top-0 left-0 w-full h-full object-cover object-top blur-[1px] opacity-70 pointer-events-none"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                    {/* Brand Column */}
                    <div className="md:col-span-1 flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2 w-fit">
                            <Image
                                src="/logo.svg"
                                alt="Dairytrix Logo"
                                width={30}
                                height={30}
                                className="w-7 h-7"
                            />
                            <span className="font-bold text-zinc-900 tracking-tight text-xl">Dairytrix</span>
                        </Link>
                        <p className="text-zinc-800 text-sm leading-relaxed max-w-[200px] font-medium">
                            Redefining dairy management with smart IoT hardware and powerful software.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[10px] font-bold text-zinc-900 uppercase tracking-widest">Solutions</h4>
                            <div className="flex flex-col gap-3">
                                {footerLinks.product.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm text-zinc-800 hover:text-zinc-950 transition-colors w-fit font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[10px] font-bold text-zinc-900 uppercase tracking-widest">Resources</h4>
                            <div className="flex flex-col gap-3">
                                {footerLinks.company.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm text-zinc-800 hover:text-zinc-950 transition-colors w-fit font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Social/Status Column */}
                    <div className="md:col-span-1 flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[10px] font-bold text-zinc-900 uppercase tracking-widest">Connect</h4>
                            <div className="flex gap-4">
                                {footerLinks.social.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        className="text-zinc-800 hover:text-zinc-950 transition-all active:scale-95"
                                    >
                                        <social.icon size={20} />
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 md:mt-24 pt-8 border-t border-zinc-200/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-zinc-700 text-[11px] font-bold uppercase tracking-wider">
                        © {new Date().getFullYear()} Dairytrix. All rights reserved.
                    </p>
                    <p className="text-zinc-700 text-[11px] font-bold uppercase tracking-wider md:text-right">
                        Designed for the future of Dairy Management.
                    </p>
                </div>
            </div>

            {/* Foreground Image - Layered behind text but above bg */}
            {/* Foreground Image - Layered on top of everything including bottom bar */}
            <img
                src="/footer-foreground.svg"
                alt="Footer Foreground"
                className="absolute top-0 left-0 w-full h-full object-cover object-top pointer-events-none z-20"
            />
        </footer>
    )
}
