import { useCallback, useEffect } from "react";
import NoteButton from "../components/NoteButton/NoteButton";
import NoteList from "../components/NoteList/NoteList";
import { useAsync } from "../hooks/common";
import {
  createNotes, deleteNotes, getNotes, updateNotes
} from "../services/notes";

export default function NoteBoard() {
 const deleteNotesClick = (id) => {
    deleteNotes(id);
    setNotes(notes.filter((note) => note.id !== id));
  };

  const {
    run,
    data: notes,
    setData: setNotes,
    status,
  } = useAsync(getNotes, []);

  const createNotesClick = useCallback(() => {
    const newNote = {
      description: "",
    };
    createNotes(newNote).then((data) => {
      setNotes([...notes, data]);
    });
  },[notes]);

  const updateNotesClick = (updateNote) => {
    updateNotes(updateNote).then((data) => {
      const newNotes = notes.map((el) => (el.id === data.id ? data : el));
      setNotes(newNotes);
    });
  };

  useEffect(() => run(), []);

  return (
    <div>
      <h1>{status}</h1>
      <NoteList
        notes={notes}
        deleteNotesClick={deleteNotesClick}
        updateNotesClick={updateNotesClick}
      />
      <NoteButton createNotesClick={createNotesClick} />
    </div>
  );
}
