import NoteItem from "./NoteItem";

function NoteList({ notes, deleteNote }) {

  return (
    <div>
      {notes.map(note => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}

export default NoteList;