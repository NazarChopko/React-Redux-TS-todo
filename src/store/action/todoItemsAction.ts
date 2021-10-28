import axios from "axios"
import { Dispatch } from "redux"
import { getAxiosTodoItems, ITodo, TodoActions, TodoActionTypes } from "../../type/type"


 
 
 export const getTodoItemsAction = (payload:any)=>{
    return {
        type:TodoActionTypes.GET_AXIOS_TODO,
        payload,
    }
}

export const setTodoItemsAction = (payload:ITodo)=>{
    return {
        type:TodoActionTypes.CREATE_TODO,
        payload,
    }
}

export const deleteTodoItemAction = (payload:any)=>{
    return {
        type:TodoActionTypes.DELETE_TODO,
        payload
    }
}

export const isCompletedTodoItemAction = (payload:any)=>{
    return {
        type:TodoActionTypes.IS_COMPLETED,
        payload
    }
}

export const updateTodoItemAction = (payload:any)=>{
    return {
        type:TodoActionTypes.UPDATE_TODO,
        payload
    }
}


export  const getTodosList = () => (dispatch:Dispatch<TodoActions>) => {
    axios.get<getAxiosTodoItems>('https://jsonplaceholder.typicode.com/todos').then(
      ({data})=> {dispatch(getTodoItemsAction(data))}
    )
  }

