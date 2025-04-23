"use client"
import { Bot, Loader, Plus } from "lucide-react"
import { SidebarMenuButton } from "./ui/sidebar"
import { Textarea } from "./ui/textarea"
import { addNotes } from "@/app/actions/notes"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { runDeepSeek, runMistral } from "@/app/actions/ai"

const AddNotes = () => {
    const queryClient = useQueryClient()
    const { mutateAsync: addNotesAsync, isLoading } = useMutation({
        mutationFn: addNotes,
        onSuccess: () => {
            queryClient.invalidateQueries(["notes"])
        }
    })

    const { mutateAsync: runMistralAsync, isLoading: isDeepSeekLoading } = useMutation({
        mutationFn: (content: string) => runMistral(content),
        mutationKey: ["summarize ai"],
    })

    const handleDeepSeekMutation = async (formData: FormData) => {
        const content = formData.get("note")?.toString()
        console.log({ content })
        if (!content) return
        const res = await runMistralAsync(content)
        console.log({ res })
    }

    return (
        <div>
            <form>
                <Textarea name="note" placeholder="write your note..." className="h-60 resize-none" disabled={isLoading || isDeepSeekLoading} />
                <div className=" flex flex-row items-center pt-2">
                    <SidebarMenuButton formAction={async (formData) => {
                        await addNotesAsync(formData)
                    }} className=" w-max pr-10" disabled={isLoading || isDeepSeekLoading}>
                        {
                            isLoading ? <Loader /> : <Plus />
                        }
                        Add
                    </SidebarMenuButton>
                    <SidebarMenuButton formAction={handleDeepSeekMutation} disabled={isDeepSeekLoading || isLoading}>
                        <Bot /> Summarize with AI
                    </SidebarMenuButton>
                </div>
            </form>
        </div>
    )
}

export default AddNotes