import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
 const [inputText,setItext] = useState({
   title:"",
   content:""
 });
 const [notes,setNotes] = useState([]);
function handlechange(event){
const {name,value} = event.target
 setItext(prev =>{
   return {
      ...prev,
      [name]:value,

   };
   
 });

};
function handleSubmit1(event){
 setNotes(prevnotes =>{return [...prevnotes,inputText];
  } );
  setItext({title:"",content:""});
 event.preventDefault();
 
}
function deletenotes(id){
  console.log(id);
  setNotes((prevnotes)=>{
   return prevnotes.filter((noteitem,index)=>{
      return index!==id;
    });
  });
};
  return (
    <div className="fullbody">
      <Header />
      <CreateArea handlechange={handlechange} handleSubmit={handleSubmit1} title={inputText.title} content={inputText.content}/>
      {notes.map((note,index) => {
       return <Note 
       key={index} 
       id={index} 
       title={note.title} 
       content={note.content} 
       onDelete={deletenotes} 
       />
      })}
      <Footer />
    </div>
  );
}

export default App;
