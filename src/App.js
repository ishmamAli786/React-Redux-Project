import React,{useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import CreateNote from './components/CreateNote';
import Note from './Note';

function App() {
  const [addItem,setAddItem]=useState([]);

  const addNote=(note)=>{
    // alert("i am clicked")
    setAddItem((prevData)=>{
      return [...prevData,note]
    })
    console.log(note)
  }

  const onDelete=(id)=>{
    setAddItem((oldData)=>{
      oldData.filter((currentData,ind)=>{
        return ind !== id;
      })
    })
  }
  
  return (
    <div>
    <Header />
    <CreateNote passNote={addNote}/>
    {
    addItem.map((data,ind)=>{
      return(
        <Note key={ind} id={ind} title={data.title} content={data.content} delteItem={onDelete}/>
      )
    })}
    <Footer/>
    </div>
  );
}

export default App;
