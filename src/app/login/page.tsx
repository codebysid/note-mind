import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToUse from "@/components/HowToUse";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Note Mind",
    metadataBase: new URL('https://note-mind.vercel.app'),
    icons: {
        icon: "/site-icon.png",
    },
    keywords: ["Siddhant Jain", "note mind", "ai todo app"],
    description: "Note Mind is an AI powered task management app",
    openGraph: {
        title: "Note Mind",
        description: "Note Mind is an AI powered task management app",
        url: "/",
        siteName: "Note Mind",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/banner.png",
                width: 800,
                height: 600,
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Note Mind",
        description: "Note Mind is an AI powered task management app",
        images: ["/banner.png"]
    },
};

export default function page() {
    return (
        <div className="flex flex-col justify-center items-center gap-28 bg-black py-10">
            <Hero />
            <Features />
            <HowToUse />
            <div className=" w-full px-6 lg:px-20">
                <Footer />
            </div>
        </div>
    )
}