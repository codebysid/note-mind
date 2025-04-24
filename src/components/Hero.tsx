"use client"
import { Suspense } from "react";
import AuthForm from "./AuthForm";
import Logo from "./Logo";
import { Loader } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-14 font-spacemono w-screen px-10 lg:px-0 relative z-50 shadow-[inset_0px_0px_200px_50px_#000]">
            <Image src="/brain-ui-element.gif" alt="bg" className=" absolute -z-10 opacity-30 object-contain" sizes="90vw" fill unoptimized />
            <div className="w-full lg:w-[50%] flex flex-col justify-center items-center gap-4 lg:gap-6 text-center text-balance">
                <Logo />
                <h1 className="text-2xl/6 lg:text-4xl/8 font-semibold w-full pt-4 lg:pt-10">Unleash Power of Note Management with AI</h1>

                <p className=" text-white/50 text-sm/4 lg:w-1/2">AI to summazrize your note strucutre, grammar and quality to boosts productivity</p>
            </div>
            <Suspense fallback={<Loader />}>
                <AuthForm />
            </Suspense>
        </div>
    )
}

export default Hero