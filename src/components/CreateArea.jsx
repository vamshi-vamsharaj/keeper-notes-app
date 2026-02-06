import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title"
          value={note.title} />
        <textarea name="content" onChange={handleChange} placeholder="Take a note..."
          rows="3"
          value={note.content} />
           <Zoom in={isExpanded}>
        <Fab onClick={submitNote}><AddIcon/> </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
