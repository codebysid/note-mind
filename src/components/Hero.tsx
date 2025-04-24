"use client"
import { Suspense } from "react";
import AuthForm from "./AuthForm";
import Logo from "./Logo";
import { Loader } from "lucide-react";

const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-14 font-spacemono w-screen">
            <div className="w-[50%] flex flex-col justify-center items-center gap-6 text-center text-balance">
                <Logo />
                <h1 className="text-4xl/8 font-semibold w-full pt-10">Unleash Power of Note Management with AI</h1>

                <p className=" text-white/50 text-sm/4 w-1/2
                ">AI to summazrize your note strucutre, grammar and quality to boosts productivity</p>
            </div>
            <Suspense fallback={<Loader />}>
                <AuthForm />
            </Suspense>
        </div>
    )
}

export default Hero