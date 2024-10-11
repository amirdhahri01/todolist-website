import { useState } from "react";
import "./App.css";
import CreateArea from "./Components/CreateArea";
import Header from "./Components/Header";
function App() {
  const [notes, setNotes] = useState([]);
  const addNewNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };
  return (
    <>
      <Header />
      <CreateArea onAdd={addNewNote} />
    </>
  );
}

export default App;
