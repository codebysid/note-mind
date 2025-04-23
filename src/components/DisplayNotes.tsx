"use client"
import { getNotes } from "@/app/actions/notes"
import NoteCard from "./NoteCard"
import { useQuery } from "@tanstack/react-query"
import { Loader } from "lucide-react"

const DisplayNotes = () => {
    const { data, isLoading, error } = useQuery({
        queryFn: getNotes,
        queryKey: ["notes"]
    })
    return (
        <div className=" pl-72 pt-10 flex flex-row flex-wrap w-full gap-28">
            {isLoading && <Loader />}
            {
                data && data?.map(({ id, title, is_completed, created_at }, index) => <NoteCard key={id} isCompleted={is_completed} title={title} index={index + 1} createdAt={created_at} noteId={id} />)
            }
        </div>
    )
}

export default DisplayNotes