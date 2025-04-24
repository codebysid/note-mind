import { handleGoogleSignIn } from "@/app/actions/login"
import { Button } from "./ui/button"

const GoogleSignInBtn = () => {

    return (
        <form action={handleGoogleSignIn}>
            <Button size={"sm"} className=" text-white w-full">Signin with Google</Button>
        </form>
    )
}

export default GoogleSignInBtn