import React,{useState} from 'react';
import {addTodo,deleteTodo,removeAll} from '.././actions/index';
import {useSelector,useDispatch} from 'react-redux';

export default function Todo() {
    const [inputdata,setInputdata]=useState();
    const list = useSelector(state => state.todoReducsers.list)
    const dispatch = useDispatch();

    // const handleData=(e)=>{
    //     const data=e.target.value;
    //     setInputdata(data);
    //     console.log(inputdata)
    // }
    return (
        <div>
         <div className="main_div">
        <div className="child_div">
          <figure>
          <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input type="text" placeholder="Add Items..." value={inputdata} onChange={(e)=>setInputdata(e.target.value)}></input>
            <i className="fa fa-plus add-btn" onClick={()=>dispatch(addTodo(inputdata),setInputdata(''))}></i>
          </div>
          <div className="displayItems">
              {
                  list.map((item,ind)=>{
                      return(
                        <div className="eachItem" key={item.id}>
                        <span>{item.data}</span>
                        <span><i className="far fa-trash-alt delete-btn" title="Delete Item" onClick={()=>dispatch(deleteTodo(item.id))}></i>
                        </span>
                    </div>
                      )
                  })
              }
          </div>
          <div className="showItems">
          <button onClick={()=>dispatch(removeAll())}>Remove All</button>
          </div>
        </div>
      </div> 
        </div>
    )
}
