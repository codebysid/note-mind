"use client"
import { formatDate } from "@/utils/supabase/helper"
import { Button } from "./ui/button"
import NoteCardDropDownMenu from "./NoteCardDropDownMenu"
import { Textarea } from "./ui/textarea"
import { ChangeEvent, useState } from "react"
import { updateNote } from "@/app/actions/notes"

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

    const handlenoteUpdate = (e: ChangeEvent<HTMLTextAreaElement>) => setUpdatednote({ title: e.target.value })

    const handleEditNote = () => setEditnote(prev => !prev)

    const handleUpdateNoteTitle = async () => {
        await updateNote(updatednote, noteId)
        handleEditNote()
    }

    const handleUpdateNoteIsComplete = async () => {
        await updateNote({ is_completed: true }, noteId)
    }

    return (
        <div className="w-1/4">
            <div className="flex flex-row justify-between px-3  py-1">
                <span>{index}</span>
                <div className=" flex gap-2">
                    <span>{formatDate(createdAt)}</span>
                    {
                        editnote ? <NoteCardDropDownMenu setEditNote={handleEditNote} handleUpdateNoteIsComplete={handleUpdateNoteIsComplete} isCompleted={isCompleted} /> : <div>
                            <Button size="sm" onClick={handleUpdateNoteTitle} >Save</Button>
                            <Button size='sm' variant="ghost" onClick={handleEditNote}>Cancel</Button>
                        </div>
                    }

                </div>
            </div>
            <Textarea value={updatednote.title} onChange={handlenoteUpdate} className=" break-words p-2 max-h-60  overflow-y-scroll" disabled={editnote} />
        </div>
    )
}

export default noteCard