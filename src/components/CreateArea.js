import React,{useState} from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [isExpanded,setExpand] = useState(false);
  function expanded(){
    setExpand(true);
  }
  
  return (
    <div>
      <form >
      {isExpanded && <input onChange={props.handlechange} name="title" placeholder="Title" value={props.title}/>}

        
        <textarea onChange={props.handlechange} onClick={expanded} name="content" placeholder="Take a note..." rows={isExpanded?3:1} value={props.content}/>
      <Zoom in={isExpanded}><Button variant="contained" onClick={props.handleSubmit} sx={{
          position:'absolute' ,
          right: '10px',
           bottom: '10px',
           background: "#f5ba13",
           color: "#fff",
          border: "none",
          height: "36px",
         borderRadius:"50%"
      
      }} ><AddIcon />
</Button></Zoom> 
      </form>
    </div>
  );
}

export default CreateArea;
