import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToUse from "@/components/HowToUse";

export default function page() {
    return (
        <div className="flex flex-col justify-center items-center gap-28 bg-black py-10">
            <Hero />
            <Features />
            <HowToUse />
            <div className=" w-full px-20">
                <Footer />
            </div>
        </div>
    )
}