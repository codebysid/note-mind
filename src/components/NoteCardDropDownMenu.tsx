import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Check, EllipsisVertical, Pencil, Trash } from "lucide-react"

interface INoteCardDropDownOptions {
    setEditNote: any,
    handleUpdateNoteIsComplete: any,
    isCompleted: boolean,
    handleDeleteNote: any
}

const NoteCardDropDownMenu = ({ setEditNote, handleUpdateNoteIsComplete, isCompleted, handleDeleteNote }: INoteCardDropDownOptions) => {
    const noteCardOtions = [
        {
            id: 1,
            title: "Mark Note Completed",
            action: handleUpdateNoteIsComplete,
            icon: <Check />
        },
        {
            id: 2,
            title: "Note Completed",
            action: "",
            icon: <Check className=" text-green-500" />
        },
        {
            id: 3,
            title: "Edit Note",
            action: setEditNote,
            icon: <Pencil />
        },
        {
            id: 4,
            title: "Delete Note",
            action: handleDeleteNote,
            icon: <Trash />
        },
    ]
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className=" cursor-pointer outline-0"><EllipsisVertical /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Notes Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    noteCardOtions.map(({ id, title, action, icon }) => {
                        if (isCompleted && id == 1) return
                        if (!isCompleted && id == 2) return
                        if (isCompleted && id == 3) return
                        return <DropdownMenuItem key={id} onClick={action || null} className={`${id == 2 && ' text-green-500'}`}>
                            {icon}
                            {title}
                        </DropdownMenuItem>
                    }
                    )
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default NoteCardDropDownMenu