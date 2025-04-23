"use client"
import { formatDate } from "@/utils/supabase/helper"
import { Button } from "./ui/button"
import NoteCardDropDownMenu from "./NoteCardDropDownMenu"
import { Textarea } from "./ui/textarea"
import { ChangeEvent, useState } from "react"
import { deleteNote, updateNote } from "@/app/actions/notes"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Loader } from "lucide-react"

interface Inotecard {
    title: string,
    isCompleted: boolean
    index: number,
    createdAt: string,
    noteId: number
}

const noteCard = ({ isCompleted, title, index, createdAt, noteId }: Inotecard) => {
    const [updatednote, setUpdatednote] = useState<{ title: string }>({ title })
    const [editnote, setEditnote] = useState<boolean>(true)
    const queryClient = useQueryClient()

    const { mutateAsync: updateNotesAsync, isLoading, error } = useMutation({
        mutationFn: ({ updatednote, noteId }: { updatednote: { title: string } | { is_completed: boolean }, noteId: number }) => updateNote(updatednote, noteId),
        mutationKey: ["update notes"],
        onSuccess: async () => {
            queryClient.invalidateQueries(["notes"])
        }
    })

    const { mutateAsync: deleteNotesAsync, isLoading: isDeleteMutationLoading, error: errorDeleteMutation } = useMutation({
        mutationFn: ({ noteId }: { noteId: number }) => deleteNote(noteId),
        mutationKey: ["delete note"],
        onSuccess: async () => {
            queryClient.invalidateQueries(["notes"])
        }
    })

    const handlenoteUpdate = (e: ChangeEvent<HTMLTextAreaElement>) => setUpdatednote({ title: e.target.value })

    const handleEditNote = () => setEditnote(prev => !prev)

    const handleUpdateNoteTitle = async () => {
        await updateNotesAsync({ updatednote, noteId })
        handleEditNote()
    }

    const handleUpdateNoteIsComplete = async () => {
        await updateNotesAsync({ updatednote: { is_completed: true }, noteId })
    }
    const handleDeleteNote = () => deleteNotesAsync({ noteId })

    return (
        <div className="w-1/4">
            <div className="flex flex-row justify-between px-3  py-1">
                <span>{index}</span>
                <div className=" flex gap-2">
                    <span>{formatDate(createdAt)}</span>
                    {(isLoading || isDeleteMutationLoading) && <Loader />}
                    {
                        editnote ? <NoteCardDropDownMenu setEditNote={handleEditNote} handleUpdateNoteIsComplete={handleUpdateNoteIsComplete} isCompleted={isCompleted} handleDeleteNote={handleDeleteNote} /> : <div>
                            <Button size="sm" onClick={handleUpdateNoteTitle} >
                                Save</Button>
                            <Button size='sm' variant="ghost" onClick={handleEditNote}>Cancel</Button>
                        </div>
                    }

                </div>
            </div>
            <Textarea value={updatednote.title} onChange={handlenoteUpdate} className={` break-words p-2 h-40 resize-none`} disabled={editnote} />
        </div>
    )
}

export default noteCard