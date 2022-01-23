const initialState={
    list:[{
        id:"1",
        name:'Apple'
    },
    {
        id:"2",
        name:'Bannana'
    },
    {
        id:"3",
        name:'Mango'
    },
    {
        id:"4",
        name:'Gava'
    },
    {
        id:"5",
        name:'WaterMelon'
    },
    {
        id:"6",
        name:'Cake'
    },
    
    ],
    message:[{text:"No Record Found"}]
}


export const useReducers=(state=initialState,action)=>{
    switch(action.type){
        case "SEARCH":{
            const newList=state.list.filter((item)=> item.name ==action.payload)
            // if(!action.payload){
            //     return{
            //         ...state,
            //     list:["No Record Found"]
            //     }
            // }else{
            return{
                ...state,
                list:newList
            }
        // }
        }

        default:{
            return state
        }
    }
}