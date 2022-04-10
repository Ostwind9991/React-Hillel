import "./NoteList.css";
import NoteItem from "../NoteItem/NoteItem";

export default function NoteList({ notes, deleteNotesClick, updateNotesClick }) {
  return (
    <div className="note__list">
      {notes.map((el) => (
        <NoteItem
          key={el.id}
          note={el}
          deleteNotesClick={deleteNotesClick}
          updateNotesClick={updateNotesClick}
        />
      ))}
    </div>
  );
}
