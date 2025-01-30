import React, { useState } from 'react';

const NotesApp = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    const handleAddNote = () => {
        const newNoteObj = {
            text: newNote,
            timestamp: new Date().toLocaleString()
        };
        setNotes([newNoteObj, ...notes]);
        setNewNote('');
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = notes.filter((note, i) => i !== index);
        setNotes(updatedNotes);
    };

    return (
        <div>
            <h2>Notes App</h2>
            <input
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Add a new note..."
            />
            <button onClick={handleAddNote}>Add Note</button>
            <div>
                {notes.map((note, index) => (
                    <div key={index}>
                        <p>{note.text} <small>{note.timestamp}</small></p>
                        <button onClick={() => handleDeleteNote(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotesApp;