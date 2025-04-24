# Notes App Assignment
Built the app according to the doc shared on twitter

Live here: https://note-mind.vercel.app

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:3000`      |
| `pnpm run build`           | Build your production site to `./dist/`          |

## How to setup locally
- Clone the repo
- Install dependencies
- Create .env.local at the root of the project and create following variables:-
    1) NEXT_PUBLIC_SUPABASE_URL
    2) NEXT_PUBLIC_SUPABASE_ANON_KEY
    3) SITE_URL
    4) MISTRAL_API_KEY

## Features
- Add Notes
- Edit Notes
- Delete Notes
- Mark Notes as completed
- AI summarization of the note
- Email and Google Auth 
- Custom SMTP server exhausted so, use below test user credentials

## Test User Credentials
- Test user email: codebysidd@gmail.com
- Test user password: 123456
- Click on Login Button