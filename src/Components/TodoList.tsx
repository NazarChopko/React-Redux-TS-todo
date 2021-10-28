import React, { FC,useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { deleteTodoItemAction, isCompletedTodoItemAction, updateTodoItemAction } from '../store/action/todoItemsAction'
import { ITodo } from '../type/type'
import Form from './Form'
import TodoItem from './TodoItem'



const TodoList:FC = () => {

    const [inputEdit,setInputEdit] = useState<any>()
    const [edit,setEdit] = useState<ITodo | null>()
    const [isDisabled,setIsDisabled] = useState<boolean>(true)
    const {items} = useTypedSelector((state)=>state.todoReducer)
    const dispatch = useDispatch()
    console.log(edit)
    
    useEffect(() => {
        if(edit){
            setInputEdit(edit.title)
         }else{
            setInputEdit('')
        }
        }, [edit])


    const handleInputEdit =(e:React.ChangeEvent<HTMLInputElement>) => {
        setInputEdit(e.target.value)
    }

    const deleteTodo = (id:string)=> {
        const deleteItem = items.filter(el=> el.id !== id)
        dispatch(deleteTodoItemAction(deleteItem))
     }
  
     const isCompletedTodo = (id:string) => {
      const isCompleted =  items.map(todo=> {
         if(todo.id === id){
           todo.completed = !todo.completed;
         }
       return todo })

         dispatch(isCompletedTodoItemAction(isCompleted))
              
     }
    
     const editTodo = (id:string) => {
       setEdit(items.find(todo => todo.id === id))
       setIsDisabled(false)
     }
  
     const updateTodo = (title:string,id:string,completed:boolean,userId:number)=>{
      const newTodo:any = items.map(todo=>
        todo.id === id ?{title,id,completed,userId} :todo)
        dispatch(updateTodoItemAction(newTodo));
        setEdit(null)
     }
  
    
    
    return (
    <>
    <h1>ToDo...</h1>
    <div className="App">
      <Form 
        text={'Edit'}
        input={inputEdit} 
        edit={edit} 
        handleInput={handleInputEdit} 
        updateTodo={updateTodo}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
         />
      <div className='todos_container'>
        {items && items.map((el,i) => <TodoItem todo={el} deleteTodo={deleteTodo} isCompletedTodo={isCompletedTodo} editTodo={editTodo} />)}
      </div>
     </div>
    </>
    )
}

export default TodoList
