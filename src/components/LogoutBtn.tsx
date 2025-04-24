import { handleLogout } from "@/app/actions/login"
import { Button } from "./ui/button"

const LogoutBtn = () => {
    return (
        <form action={handleLogout}>
            <Button variant="ghost" className=" text-red-500 hover:bg-transparent hover:text-red-700">
                Logout
            </Button>
        </form>
    )
}

export default LogoutBtn