import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getSingleUser,editUser} from './../store/action/action'

const EditUser = () => {
    const dispatch = useDispatch()
    const {id}  = useParams()
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [contact,setContact] = useState('')
    const [address,setAddress] = useState('')
    const {user} = useSelector(state=>state.usersReducer)
    console.log('user Is',user)
    const handleSubmitData =(e)=>{
        e.preventDefault()
        const user ={name,email,contact,address}
        dispatch(editUser(id,user))
        navigate('/')
    }

    useEffect(()=>{
        dispatch(getSingleUser(id))
    },[])

    useEffect(()=>{
        if(user){
            setName(user.name)
            setEmail(user.email)
            setContact(user.contact)
            setAddress(user.address)
        }
    },[user])

  return (
    <>
    <TextField id="filled-basic" type="text" label="Name" value={name} onChange={(e)=>setName(e.target.value)} variant="filled" />
    <TextField id="filled-basic" type="email" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} variant="filled" />
    <TextField id="filled-basic" type="number" label="Contact" value={contact} onChange={(e)=>setContact(e.target.value)} variant="filled" />
    <TextField id="filled-basic" type="text" label="Address" value={address} onChange={(e)=>setAddress(e.target.value)} variant="filled" />
    <Button variant="outlined" type="submit" onClick={(e)=>handleSubmitData(e)}>Update</Button>
    </>
  )
}

export default EditUser