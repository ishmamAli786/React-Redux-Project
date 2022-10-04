import {userConstant} from './../constants/user.constant'
import axios from 'axios'


const getUsers =(users)=>({
    type:userConstant.GET_USERS,
    payload:users
})


const userDeleted =()=>({
    type:userConstant.DELETE_USER
})

const userAdd =()=>({
    type:userConstant.ADD_USER
})

const getUser =(user)=>({
    type:userConstant.GET_USER,
    payload:user
})
export const loadUsers =()=>{
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API}`).then((response)=>{
            dispatch(getUsers(response.data))
        })
        .catch((error)=>{
            console.log('error is',error)
        })
    }
}


export const deleteUser =(id)=>{
    return function (dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((response)=>{
            // dispatch(userDeleted())
            dispatch(loadUsers())
        })
        .catch((error)=>{
            console.log('error is',error)
        })
    }
}


export const addUser =(user)=>{
    return function (dispatch){
        axios.post(`${process.env.REACT_APP_API}`,user).then((response)=>{
            dispatch(userAdd())
        })
        .catch((error)=>{
            console.log('error is',error)
        })
    }
}

export const getSingleUser =(id)=>{
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((response)=>{
            dispatch(getUser(response.data))
        })
        .catch((error)=>{
            console.log('error is',error)
        })
    }
}

export const editUser =(id,user)=>{
    return function (dispatch){
        axios.patch(`${process.env.REACT_APP_API}/${id}`,user).then((response)=>{
            dispatch(loadUsers())
        })
        .catch((error)=>{
            console.log('error is',error)
        })
    }
}