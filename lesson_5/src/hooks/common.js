import { useState, useCallback } from "react";
import {
  createNotes,
  deleteNotes,
  getNotes,
  updateNotes,
} from "../services/notes";

export function useAsync(defaultValue = []) {
  const [status, setStatus] = useState("IDLE");
  const [data, setData] = useState(defaultValue);

  function run() {
    setStatus("LOADING NoteBoard");

    getNotes()
      .then((data) => {
        setStatus("NoteBoard");
        setData(data);
        return data;
      })
      .catch((error) => {
        setStatus("ERROR");
        return Promise.reject(error);
      });
  }

  function deleteNote(id) {
    deleteNotes(id);
    setData(data.filter((data) => data.id !== id));
  }

  function updateNotesClick(updateNote) {
    updateNotes(updateNote).then((reply) => {
      const newNotes = data.map((el) => (el.id === reply.id ? reply : el));
      setData(newNotes);
    });
  }

  const createNotesClick = useCallback(() => {
    const newNote = {
      description: "",
    };
    createNotes(newNote).then((reply) => {
      setData([...data, reply]);
    });
  }, [data]);

  return {
    status,
    data,
    run,
    deleteNote,
    updateNotesClick,
    createNotesClick,
  };
}
