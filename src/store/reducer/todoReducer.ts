import { ITodo, TodoActionTypes,TodoActions } from "../../type/type"
    
export interface ITodoState{
   items:any
}

const initialState={
    items:[] as ITodo[]
}


const todoReducer = (state = initialState,action:TodoActions):ITodoState=>{
    switch(action.type){
        case TodoActionTypes.GET_AXIOS_TODO:
            return {
                ...state,
                items:action.payload.slice(0,10),
                }
        case TodoActionTypes.CREATE_TODO:
            return{
                ...state,
                items:[action.payload,...state.items,]
            }
        case TodoActionTypes.IS_COMPLETED:
            return{
                ...state,
                items: action.payload
            }
         case TodoActionTypes.DELETE_TODO:
            return {
                ...state,
                items: action.payload
            }
        case TodoActionTypes.UPDATE_TODO:
            return {
                ...state,
                items:action.payload
                    }        
        default: return state
    }

}


export default todoReducer