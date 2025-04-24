"use client"
import { Bot, Loader, Plus } from "lucide-react"
import { SidebarMenuButton } from "./ui/sidebar"
import { Textarea } from "./ui/textarea"
import { addNotes } from "@/app/actions/notes"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { runMistral } from "@/app/actions/ai"
import { ChangeEvent, useState } from "react"
import { toast } from "sonner"

const AddNotes = () => {
    const [note, setNote] = useState<string>()
    const queryClient = useQueryClient()

    const { mutateAsync: addNotesAsync, isLoading } = useMutation({
        mutationFn: addNotes,
        onSuccess: () => {
            queryClient.invalidateQueries(["notes"])
            setNote("")
        }
    })

    const { mutateAsync: runMistralAsync, isLoading: isDeepSeekLoading } = useMutation({
        mutationFn: (content: string) => runMistral(content),
        mutationKey: ["summarize ai"],
    })

    const handleLLMMutation = async (formData: FormData) => {
        const content = formData.get("note")?.toString()
        console.log({ content })
        if (!content) return
        const res = await runMistralAsync(content)
        console.log({ res })
        if (!res) return
        setNote(res as string)
    }

    const handleNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => setNote(e.target.value)

    const handleAddNotesMutation = async (formData: FormData) => {
        const res = await addNotesAsync(formData)
        toast.success(res)
    }

    return (
        <div>
            <form>
                <Textarea name="note" value={note} onChange={handleNoteChange} placeholder="write your note..." className="h-60 resize-none" disabled={isLoading || isDeepSeekLoading} />
                <div className=" flex flex-row items-center pt-2">
                    <SidebarMenuButton formAction={handleAddNotesMutation} className=" w-max pr-10" disabled={isLoading || isDeepSeekLoading}>
                        {
                            isLoading ? <Loader /> : <Plus />
                        }
                        Add
                    </SidebarMenuButton>
                    <SidebarMenuButton formAction={handleLLMMutation} disabled={isDeepSeekLoading || isLoading}>
                        <Bot /> Summarize with AI
                    </SidebarMenuButton>
                </div>
            </form>
        </div>
    )
}

export default AddNotes