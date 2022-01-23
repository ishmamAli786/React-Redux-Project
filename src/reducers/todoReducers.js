const initialSate={
    list:[]
}

export const todoReducsers=(state=initialSate,action)=>{
    switch(action.type){
        case "ADD_TODO":{
            const {id,data}=action.payload;
            return{
                ...state,
                list:[...state.list,{id:id,data:data}]
            }
        }
        case "DELETE_TODO":{
            // const {id,data}=action.payload;
            const newList=state.list.filter((item)=> item.id !==action.id)
            return{
                ...state,
                list:newList
            }
        }
        case "remove_TODO":{
            return{
                ...state,
                list:[]
            }
        }
        default:{
            return state
        }
    }

}