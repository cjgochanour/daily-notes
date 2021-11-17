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

function createNote(note) {
    const lastIndex = notes.length - 1
    const lastNote = notes[lastIndex]
    const maxID = lastNote.id
    const newID = maxID + 1
  
    note.id = newID
    notes.push(note)
}

const noteAboutToday = {
    id: 3,
    subject: "JavaScript",
    date: "Nov 17",
    feeling: "logic isn't real, it can't hurt me",
    timeSpent: 120,
}

notes.push(noteAboutToday)

const moreNewerNote = {
    subject: "Zoom",
    date: "Nov 17",
    dateCreated: Date(),
    feeling: "zoomy",
    timeSpent: "3.50"
}

createNote(moreNewerNote)

console.log(notes)