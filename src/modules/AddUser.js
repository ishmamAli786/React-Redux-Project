import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addUser} from './../store/action/action'

const AddUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [contact,setContact] = useState('')
    const [address,setAddress] = useState('')

    const handleSubmitData =(e)=>{
        e.preventDefault()
        const user ={name,email,contact,address}
        dispatch(addUser(user))
        navigate('/')
    }
  return (
    <>
    <TextField id="filled-basic" type="text" label="Name" value={name} onChange={(e)=>setName(e.target.value)} variant="filled" />
    <TextField id="filled-basic" type="email" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} variant="filled" />
    <TextField id="filled-basic" type="number" label="Contact" value={contact} onChange={(e)=>setContact(e.target.value)} variant="filled" />
    <TextField id="filled-basic" type="text" label="Address" value={address} onChange={(e)=>setAddress(e.target.value)} variant="filled" />
    <Button variant="outlined" type="submit" onClick={(e)=>handleSubmitData(e)}>ADD</Button>
    </>
  )
}

export default AddUser