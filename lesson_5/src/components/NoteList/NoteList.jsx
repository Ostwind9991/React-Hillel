import "./NoteList.css";
import NoteItem from "../NoteItem/NoteItem";

export default function NoteList({ notes, deleteNote, updateNotesClick }) {
  return (
    <div className="note__list">
      {notes.map((el) => (
        <NoteItem
          key={el.id}
          note={el}
          deleteNote={deleteNote}
          updateNotesClick={updateNotesClick}
        />
      ))}
    </div>
  );
}
