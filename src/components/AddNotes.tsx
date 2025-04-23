"use client"
import { Loader, Plus } from "lucide-react"
import { SidebarMenuButton } from "./ui/sidebar"
import { Textarea } from "./ui/textarea"
import { addNotes } from "@/app/actions/notes"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const AddNotes = () => {
    const queryClient = useQueryClient()
    const { mutateAsync: addNotesAsync, isLoading } = useMutation({
        mutationFn: addNotes,
        onSuccess: () => {
            queryClient.invalidateQueries(["notes"])
        }
    })

    return (
        <div>
            <form action={async (formData) => {
                await addNotesAsync(formData)
            }}>
                <Textarea name="note" placeholder="write your note..." className="h-40" disabled={isLoading} />
                <SidebarMenuButton>
                    {
                        isLoading ? <Loader /> : <Plus />
                    }
                    Add Note
                </SidebarMenuButton>
            </form>
        </div>
    )
}

export default AddNotes