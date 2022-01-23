import React,{useState} from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {createAction} from './store/Reducer/Action';

function App() {
  const [searchData,setSearchData]=useState('');
  const state = useSelector(state => state.list);
  const dispatch=useDispatch();

  const inputData=(e)=>{
    setSearchData(e.target.value);
  }
  return (
    <div className="App">
      <h1>Filter In Array</h1>
      <input type="text" placeholder="Search in Table" value={searchData} onChange={(e)=>inputData(e)}></input>
      <button onClick={()=>dispatch({type:"SEARCH",payload:searchData})} style={{background:'red',color:'white'}}>Filter</button>
      <table border="2" style={{margin:"0 auto",width:"300px",marginTop:"20px"}} >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          
      {
        state.map((item,ind)=>{
          return(
            <tr key={ind}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          )
        })
      }
      </tbody>
      </table>
    </div>
  );
}

export default App;
