import { db } from "../firebase/firebase-config"


export const loadNotes = async(uid) => {

    const notes = [];
    const notesSnapShot = await db.collection(`${uid}/journal/notes`).get();

    notesSnapShot.forEach( snapShotChildren => {
        notes.push({
            id: snapShotChildren.id,
            ...snapShotChildren.data()
        })
    })
  return notes
}
