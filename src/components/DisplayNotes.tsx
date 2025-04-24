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
        <div className="lg:pl-80 py-10 flex flex-row flex-wrap w-full gap-5 lg:gap-10 justify-start pl-4 lg:px-0">
            {isLoading && <Loader />}
            {
                data && data?.map(({ id, title, is_completed, created_at }) => <NoteCard key={id} isCompleted={is_completed} title={title} createdAt={created_at} noteId={id} />)
            }
        </div>
    )
}

export default DisplayNotes