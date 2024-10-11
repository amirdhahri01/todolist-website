import { Fab } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: "", content: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  const submitNote = (e) => {
    e.preventDefault();
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <div>
      <form className="create-note">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          rows={3}
          placeholder="Take a note..."
          value={note.content}
          onChange={handleChange}
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};

export default CreateArea;
