"use client"
import { useSearchParams } from "next/navigation";
import GoogleSignInBtn from "./GoogleSignInBtn"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { emailLogin, signup } from "@/app/actions/login";
import { toast } from "sonner";
import { useEffect } from "react";

const AuthForm = () => {
    const params = useSearchParams()
    const message = params.get('message')

    useEffect(() => {
        if (message && message.length > 0) {
            toast(message)
        }
    }, [])
    return (
        <div className="w-[35%] space-y-5 p-8 rounded-2xl border-2">
            <form className="w-full space-y-5 text-xs">
                <label htmlFor="email">Email:</label>
                <Input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <Input id="password" name="password" type="password" required />
                <div className=" flex flex-row gap-4 w-full">
                    <Button formAction={emailLogin} variant="outline" className=" flex-1">Log in [Existing Account]</Button>
                    <Button formAction={signup} variant="outline" className=" flex-1">Sign up [First Time]</Button>
                </div>
            </form>
            <p className=" text-center">or</p>
            <div className=" w-full">
                <GoogleSignInBtn />
            </div>
        </div>
    )
}

export default AuthForm