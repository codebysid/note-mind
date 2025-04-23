import { Button } from "@/components/ui/button";
import { emailLogin, signup } from "../actions/login";
import { Input } from "@/components/ui/input";

export default function page() {
    return (
        <form>
            <label htmlFor="email">Email:</label>
            <Input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <Input id="password" name="password" type="password" required />
            <Button formAction={emailLogin}>Log in</Button>
            <Button formAction={signup}>Sign up</Button>
        </form>
    )
}