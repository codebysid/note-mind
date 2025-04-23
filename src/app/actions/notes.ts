"use server"

import { createClientServer } from "@/utils/supabase/server"
import { getUserData } from "./login"

export async function addNotes(formData: FormData) {
    console.log("adding notes...")
    const title = formData.get('note')?.toString()
    if (!title) {
        console.log(`title is not provided: ${title}`)
        return
    }
    const userData = JSON.parse(await getUserData())
    if (userData.code !== 200) {
        console.log(`could not fetch user data: ${userData}`)

        return
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
    } catch (err) {
        console.log(err)
    }

}