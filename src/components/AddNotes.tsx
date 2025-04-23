import { Plus } from "lucide-react"
import { SidebarMenuButton } from "./ui/sidebar"
import { Textarea } from "./ui/textarea"
import { addNotes } from "@/app/actions/notes"

const AddNotes = () => {
    return (
        <div>
            <form action={addNotes}>
                <Textarea name="note" placeholder="write your note..." className="h-40" />
                <SidebarMenuButton>
                    <Plus />
                    Add Note
                </SidebarMenuButton>
            </form>
        </div>
    )
}

export default AddNotes