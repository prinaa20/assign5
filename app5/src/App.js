import React from 'react';
import SignUpForm from './components/SignUpForm'; // Make sure this path is correct
import NotesApp from './components/NotesApp'; // Make sure this path is correct

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>

      {/* Sign-Up Form */}
      <div>
        <h2>Sign Up Form</h2>
        <SignUpForm />
      </div>

      {/* Notes Application */}
      <div>
        <h2>Notes Application</h2>
        <NotesApp />
      </div>
    </div>
  );
}

export default App;