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
        answer: "Dairytrix provides a comprehensive software suite including a powerful Desktop Dashboard for detailed farm management and a streamlined Mobile App for real-time monitoring on the go. Both platforms offer live data visualization, health alerts, and productivity tracking for your herd."
    },
    {
        question: "How does the Dairytrix Mobile App help daily operations?",
        answer: "The mobile app gives farmers instant notifications about critical events, such as unusual activity patterns or health drops in cattle. It allows you to log data locally and sync it automatically once you have a connection, making it perfect for field use."
    },
    {
        question: "Can I access the Dairytrix Dashboard on my computer?",
        answer: "Absolutely. The Dairytrix Desktop application (available for Windows and macOS) is designed for deep-dive analysis. It features advanced reporting tools, long-term trend analysis, and administrative controls to manage large-scale dairy operations and multiple farm sites."
    },
    {
        question: "What exactly is the Dairytrix Bridge?",
        answer: "The Dairytrix Bridge is a robust industrial-grade IoT gateway. It acts as the central hub of your farm, collecting data from various sensors placed on your livestock and equipment, and securely transmitting that data to our cloud servers via Wi-Fi or Cellular networks."
    },
    {
        question: "Does the hardware work without a continuous internet connection?",
        answer: "Yes. The Dairytrix Bridge has built-in local storage to buffer data during internet outages. Once the connection is restored, it automatically synchronizes the cached data to the cloud, ensuring no information is lost."
    },
    {
        question: "How does the IoT hardware integrate with existing setups?",
        answer: "Our hardware is designed to be plug-and-play. It works alongside your existing milking machines and cooling systems, using non-invasive sensors to gather real-time data without requiring major modifications."
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
