const notes = [
    {
        id: 1,
        subject: "CSS",
        date: "Nov 11",
        feeling: "breezy",
        timeSpent: 180,
    },
    {
        id: 2,
        subject: "Git",
        date: "Nov 13",
        feeling: "scared",
        timeSpent: 1200,
    },
]


const noteAboutToday = {
    id: 3,
    subject: "JavaScript",
    date: "Nov 17",
    feeling: "logic isn't real, it can't hurt me",
    timeSpent: 120,
}

notes.push(noteAboutToday)


console.log(notes)