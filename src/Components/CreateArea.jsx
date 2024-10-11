import { useState } from "react";

const CreateArea = () => {
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
      </form>
    </div>
  );
};

export default CreateArea;
