"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { GeistSans } from "geist/font/sans"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "What is the Dairytrix Software ecosystem?",
        answer: "Dairytrix provides a comprehensive software suite designed specifically for dairy owners and staff. This includes a powerful Desktop Dashboard for detailed dairy management and a streamlined Mobile App for real-time monitoring of milk collection and center operations on the go."
    },
    {
        question: "How does the Dairytrix Mobile App help dairy staff?",
        answer: "The mobile app gives dairy owners and staff instant notifications about milk collection trends, quality alerts, and daily intake. Staff can log data locally at the collection center and sync it automatically, ensuring records are always up to date even in rural areas."
    },
    {
        question: "Can I manage multiple dairy collection centers?",
        answer: "Absolutely. The Dairytrix Desktop application is built for multi-center management. It allows dairy owners to oversee several collection points, analyze long-term performance trends across different centers, and manage administrative controls from one central location."
    },
    {
        question: "What exactly is the Dairytrix Bridge?",
        answer: "The Dairytrix Bridge is a robust industrial-grade IoT gateway designed for the dairy environment. It acts as the central hub of your collection center, syncing data from milk analyzers and various sensors directly to our cloud servers for precise record-keeping."
    },
    {
        question: "Can farmers access their own participation records?",
        answer: "Yes. While the system is optimized for dairy management, farmers can use the mobile platform to check their personal milk supply history, quality reports, and upcoming payment schedules, fostering transparency between the dairy and the supplier."
    },
    {
        question: "Does the hardware work without a continuous internet connection?",
        answer: "Yes. The Dairytrix Bridge has built-in local storage to buffer collection data during internet outages. Once the connection is restored, it automatically synchronizes the cached data to the cloud, ensuring no record is ever lost."
    }
]

export default function FAQ() {
    return (
        <section className={cn(
            "w-full py-24 md:py-32",
            GeistSans.className
        )}>
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-zinc-600 text-sm md:text-lg max-w-lg mx-auto leading-relaxed">
                        Quick answers to the most common questions about Dairytrix software and hardware.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border border-zinc-200/50 bg-white/40 backdrop-blur-sm rounded-xl md:rounded-2xl px-5 md:px-8 transition-all data-[state=open]:border-zinc-300"
                        >
                            <AccordionTrigger className="text-left py-4 md:py-6 text-sm md:text-base font-semibold text-zinc-800 hover:text-zinc-950 hover:no-underline transition-colors cursor-pointer touch-manipulation">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-600 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
