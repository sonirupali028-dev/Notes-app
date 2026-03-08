import { useState } from "react";

function NoteInput({ addNote }) {

  const [text, setText] = useState("");

  const handleAdd = () => {
    if(text.trim() === "") return;

    addNote(text);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Write a note..."
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default NoteInput;