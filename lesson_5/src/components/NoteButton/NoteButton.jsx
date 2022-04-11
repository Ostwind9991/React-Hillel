import "./NoteButton.css";

export default function NoteButton({ createNotesClick }) {
  return (
    <button onClick={() => createNotesClick()} className="note__button">
      Добавить стикер
    </button>
  );
}
