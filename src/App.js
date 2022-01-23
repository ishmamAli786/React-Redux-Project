import React,{useState} from 'react';
import './App.css';
import TodoList from './TodoList';
function App() {
  const [list,setList]=useState("");
  const [items,setItems]=useState([]);



  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,list]
    });
    setList("")
    
  }

  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElement,index)=>{
        return index !==id;
      })
    });
 }
  return (
    <div className="main_div">
      <div className="center_div"><br/>
      <h1>Todo List</h1><br/>
      <input type="text" placeholder="Add a Items" value={list} onChange={(e)=>setList(e.target.value)}/>
      <button onClick={listOfItems}>+</button>
      <ol>
        {
          items.map((data,ind)=>{
            return(
              <TodoList data={data} key={ind} id={ind} onSelect={deleteItems}/>
            )
          })
        }
      </ol>
      </div>
      <button onClick={()=>setItems([])}>Delete All</button>
    </div>
  );
}

export default App;
