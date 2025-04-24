import FeatureCard from "./FeatureCard"

const features = [
    {
        id: 1,
        title: "📝 Create and Manage Notes",
        description: "Easily add, edit, and delete notes with a simple, intuitive interface."
    },
    {
        id: 2,
        title: "✅ Mark Notes as Completed",
        description: "Keep track of what’s done. Mark notes as completed when they’re no longer needed."
    },
    {
        id: 3,
        title: "🔄 Real-time Updates",
        description: "Changes to your notes are reflected instantly using powerful server actions and React Query."
    },
    {
        id: 4,
        title: "📤 AI Summarization",
        description: "Summarize your long notes in a click. Let AI do the heavy lifting"
    },
    {
        id: 5,
        title: "📅 Date Stamped Notes",
        description: "Each note includes a readable creation date, helping you track when things were added."
    },
    {
        id: 6,
        title: "📂 Organized by User",
        description: "Every note is securely stored and linked to its respective user, personalized and private."
    },
]

const Features = () => {
    return (
        <div className=" text-center space-y-10">
            <h2 className="heading2">Features</h2>
            <div className=" flex flex-col lg:flex-row flex-wrap items-center justify-center gap-6 lg:gap-12 px-10 lg:px-0">

                {
                    features.map(({ id, title, description }) => {
                        return <FeatureCard key={id} description={description} title={title} />
                    })
                }
            </div>
        </div>
    )
}

export default Features