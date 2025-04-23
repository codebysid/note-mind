"use server"

import { createClientServer } from "@/utils/supabase/server"
import { getUserData } from "./login"
import { revalidatePath } from "next/cache"

export async function addNotes(formData: FormData) {
    const title = formData.get('note')?.toString()
    if (!title) {
        console.log(`title is not provided: ${title}`)
        return "No note content found"
    }
    const userData = JSON.parse(await getUserData())
    if (userData.code !== 200) {
        console.log(`could not fetch user data: ${userData}`)

        return "could not fetch user data"
    }
    try {
        const supabase = await createClientServer()
        const data = await supabase.from('notes').insert([
            {
                title,
                is_completed: false,
                user_id: userData.data.id
            }
        ])
        console.log({ data })
        return "Note added"
    } catch (err) {
        console.log(err)
        return "Could not add note"
    }

}

export async function getNotes() {
    const user = JSON.parse(await getUserData());

    if (user.code !== 200) {
        console.log("No user ID found");
        return
    }
    try {

        const supabase = await createClientServer();

        const { data, error } = await supabase
            .from("notes")
            .select("*")
            .eq("user_id", user.data.id)
            .order("created_at", { ascending: false });
        if (error) {
            console.log("Error fetching notes:", error);
            return
        }
        return data;
    } catch (err) {
        console.log(err)
    }
}

export async function updateNote(dataObjToUpdate: any, noteId: number) {

    if (!noteId || !dataObjToUpdate) return "Could not update the note"
    try {

        const user = JSON.parse(await getUserData())
        const supabase = await createClientServer()

        const { error } = await supabase
            .from("notes")
            .update(dataObjToUpdate)
            .eq("id", noteId)
            .eq("user_id", user.data.id)
        if (error) {
            console.log("Update failed:", error.message)
            return "Could not update the note"
        }
        return "Note updated"
    } catch (err) {
        console.log(err)
        return "Could not update the note"
    }
}

export async function deleteNote(noteId: number) {
    const supabase = await createClientServer()
    const user = JSON.parse(await getUserData())

    if (!user) {
        return "Could not find user"
    }

    const { error } = await supabase
        .from("notes")
        .delete()
        .eq("id", noteId)
        .eq("user_id", user.data.id)

    if (error) {
        console.error(error)
        return "Could not delete the note"
    }
    return "Note deleted"
}