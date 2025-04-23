import { handleLogout } from "@/app/actions/login"
import { Button } from "./ui/button"

const LogoutBtn = () => {
    return (
        <form action={handleLogout}>
            <Button>
                Logout
            </Button>
        </form>
    )
}

export default LogoutBtn