import { useEffect, useState } from "react";
import NoteList from "../components/NoteList/NoteList";
import NoteButton from "../components/NoteButton/NoteButton";
import {
  getNotes,
  deleteNotes,
  createNotes,
  updateNotes,
} from "../services/notes";

export default function NoteBoard() {
  const [notes, setNotes] = useState([]);

  const deleteNotesClick = (id) => {
    deleteNotes(id);
    setNotes(notes.filter((note) => note.id !== id));
  };

  const createNotesClick = () => {
    const newNote = {
      description: "",
    };
    createNotes(newNote).then((data) => {
      setNotes([...notes, data]);
    });
  };

  const updateNotesClick = (updateNote) => {
    updateNotes(updateNote).then((data) => {
      const newNotes = notes.map((el) => (el.id === data.id ? data : el));
      setNotes(newNotes);
    });
  };

  useEffect(() => {
    getNotes().then((data) => setNotes(data));
  }, []);

  return (
    <div>
      <NoteList
        notes={notes}
        deleteNotesClick={deleteNotesClick}
        updateNotesClick={updateNotesClick}
      />
      <NoteButton createNotesClick={createNotesClick} />
    </div>
  );
}
