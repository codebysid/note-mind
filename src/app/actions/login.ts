'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClientServer } from '@/utils/supabase/server'

export async function emailLogin(formData: FormData) {
    const supabase = await createClientServer()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        redirect('/login?message=Could not authenticate user')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signup(formData: FormData) {
    const supabase = await createClientServer()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/login?message=Can not create account at the moment')
    }

    revalidatePath('/', 'layout')
    redirect('/login')
}

export async function handleGoogleSignIn() {
    const supabase = await createClientServer()
    const supabaseAuthCallbackUrl = `${process.env.SITE_URL}/auth/callback`

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: supabaseAuthCallbackUrl
        }
    })

    if (error) {
        console.log(`Error while google signup: ${error}`)
        redirect("/login?message=Could not signup with Google")
    }

    redirect(data.url)
}

export async function handleLogout() {
    console.log("loggin out....")
    const supabase = await createClientServer()
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.log(`Could not sign out`)
    } else {
        console.log(`Signed out`)
        redirect("/login")
    }
}

export async function getUserData() {
    const supabase = await createClientServer()
    const { data, error } = await supabase.auth.getUser()
    if (error) {
        console.log(`Error ocurred while fetching user data: ${error}`)
        return JSON.stringify({ msg: "could not get user details", code: 501, data: null })
    }
    return JSON.stringify({ msg: "succesfull", code: 200, data: data.user })
}