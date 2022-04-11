import { useState } from "react";
import "./NoteItem.css";

export default function NoteItem({ note, deleteNote, updateNotesClick }) {
  const [description, setDescription] = useState("");

  return (
    <div className="note__item">
      <button onClick={() => deleteNote(note.id)}>X</button>
      <textarea
        rows="5"
        cols="30"
        defaultValue={note.description}
        onChange={(e) => setDescription(e.target.value)}
        onBlur={() =>
          updateNotesClick({
            description: description,
            id: note.id,
          })
        }
      ></textarea>
    </div>
  );
}
