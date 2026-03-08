










import { useState } from "react";

function App() {

  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    if(text.trim() === "") return;

    const newNote = {
      id: Date.now(),
      content: text
    };

    setNotes([...notes, newNote]);
    setText("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div>
      <h1>Notes App</h1>

      <input
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Write a note..."
      />

      <button onClick={addNote}>Add</button>

      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.content}
            <button onClick={()=>deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;