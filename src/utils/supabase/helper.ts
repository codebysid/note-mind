export function formatDate(date: string) {
    const formatted = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return formatted
}