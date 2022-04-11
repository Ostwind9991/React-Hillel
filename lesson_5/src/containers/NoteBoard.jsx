import { useEffect } from "react";
import NoteButton from "../components/NoteButton/NoteButton";
import NoteList from "../components/NoteList/NoteList";
import { useAsync } from "../hooks/common";

export default function NoteBoard() {
  const {
    run,
    data: notes,
    status,
    deleteNote,
    updateNotesClick,
    createNotesClick,
  } = useAsync([]);

  useEffect(() => run(), []);

  return (
    <div>
      <h1>{status}</h1>
      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        updateNotesClick={updateNotesClick}
      />
      <NoteButton createNotesClick={createNotesClick} />
    </div>
  );
}
