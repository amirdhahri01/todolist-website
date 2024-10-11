import { useState } from "react";
import "./App.css";
import CreateArea from "./Components/CreateArea";
import Header from "./Components/Header";
import Note from "./Components/Note";
import Footer from "./Components/Footer";
function App() {
  const [notes, setNotes] = useState([]);
  const addNewNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };
  const deleteNote = (id) => {
    setNotes(
      notes.filter((_, index) => {
        return index !== id;
      })
    );
  };
  return (
    <>
      <Header />
      <CreateArea onAdd={addNewNote} />
      {notes.map(({ title, content }, index) => (
        <Note
          title={title}
          content={content}
          key={index}
          id={index}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
