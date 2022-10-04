import {userConstant} from './../constants/user.constant'

const initialState = {
    users:[],
    user:{},
    loading:true
}


const usersReducer = (state=initialState,action)=>{
    switch(action.type){
        case userConstant.GET_USERS:
            return{
                ...state,
                users:action.payload,
                loading:false
            }
            case userConstant.DELETE_USER:
            return{
                ...state,
                loading:false
            }
            case userConstant.ADD_USER:
            return{
                ...state,
                loading:false
            }
            case userConstant.GET_USER:
            return{
                ...state,
                user:action.payload,
                loading:false
            }
        default:return state
    }
}

export default usersReducer