import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Home() {
    const [users,setUsers]=useState([]);


    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers=async ()=>{
        const result=await axios.get('http://localhost:3003/users');
        //const data=await result.data();
        //console.log(result.data)
        setUsers(result.data.reverse())
    }


    const deleteUSer=async (id)=>{
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUsers();
    }


  

    return (
        <div style={{marginLeft:"50px",marginRight:"50px"}}>
            <h1>Home</h1>
            <table className="table border shadow">
                <thead className="table-dark">
                    <tr>
                       <th>#</th>
                        <th>NAME</th>
                        <th>USER NAME</th>
                        <th>EMAIL</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item,ind)=>{
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>
                                    <span><Link to={`/view/${item.id}`}><i className="fas fa-eye-slash"></i></Link></span>
                                    <span style={{marginLeft:"8px"}}><Link to={`/edit/${item.id}`}><i className="fas fa-edit"></i></Link></span>
                                    <span style={{marginLeft:"8px"}}><Link to=""><i className="fas fa-trash-alt" onClick={()=>deleteUSer(item.id)}></i></Link></span>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
