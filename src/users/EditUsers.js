import React,{useState,useEffect} from "react";
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom';

export default function EditUser() {
    const [userData,setUserData]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const history=useHistory();
    const {id}=useParams();

    const onInputChange=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }
    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`,userData);
        history.push('/')

    }

    useEffect(()=>{
        const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:3003/users/${id}`)
        setUserData(result.data)
        }
        loadUser();
    },[])
  return (
    <div>
      <form style={{marginLeft:"300px",marginRight:"300px",marginTop:"20px"}} onSubmit={(e)=>onSubmit(e)}>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Name"
            name="name"
            value={userData.name}
            onChange={(e)=>onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your User Name"
            name="username"
            value={userData.username}
            onChange={(e)=>onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Email"
            name="email"
            value={userData.email}
            onChange={(e)=>onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Phone Number"
            name="phone"
            value={userData.phone}
            onChange={(e)=>onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Website Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Website Name"
            name="website"
            value={userData.website}
            onChange={(e)=>onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary form-control">
          Edit USER
        </button>
      </form>
    </div>
  );
}
