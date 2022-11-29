import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function CreateNotes(notes) {
  return <Note Heading={notes.title} content={notes.content} key={notes.key} />;
}
console.log(Notes);
function App() {
  return (
    <div>
      <Header />
      {Notes.map(CreateNotes)}
      <Footer />
    </div>
  );
}

export default App;
