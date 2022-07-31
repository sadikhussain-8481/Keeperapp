
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function Note(props) {
  function handledelete(){
    props.onDelete(props.id)
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      
      <Button onClick={handledelete} ><DeleteForeverIcon /> </Button>
    </div>
  );
}

export default Note;
