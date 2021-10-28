import React,{FC,useState,useEffect} from 'react';
import  {Route,Switch,Redirect} from 'react-router-dom'
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import {v4 as uuidv4} from 'uuid'
import './libs/App.scss'
import TodoList from './Components/TodoList';
import { useDispatch} from 'react-redux';
import { getTodosList, setTodoItemsAction, updateTodoItemAction } from './store/action/todoItemsAction';
import { useTypedSelector } from './hooks/useTypedSelector';


const App:FC = () => {
  const [inputCreate,setInputCreate]  = useState<string>('');
  const {items} = useTypedSelector((state)=>state.todoReducer)
  const getItemFromLocalStorage = JSON.parse(localStorage.getItem('items') as string) 

  const dispatch = useDispatch()


useEffect(()=> {
  if(getItemFromLocalStorage){
    dispatch(updateTodoItemAction(getItemFromLocalStorage))
  }else{
    dispatch(getTodosList());
  }   
  }
  ,[])

useEffect(()=>{
  localStorage.setItem('items',JSON.stringify(items))
},[items])


  const handleInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputCreate(e.target.value)
  }

  const newTodo = () => {
      dispatch(setTodoItemsAction({title:inputCreate,userId:10,id:uuidv4(),completed:false}))
      setInputCreate('')

        if(inputCreate === ''){
          dispatch(updateTodoItemAction(items))
        }
    
  }

  const pressEnter = (e:React.KeyboardEvent)=>{
    if(e.code === "Enter"){
        newTodo()
    }
   }

   
   
  return (
  <>
    <Navbar/>
    <Switch>
      <Route path='/createTodo'>
       <Form text={'Add'} input={inputCreate} handleInput={handleInput} pressEnter={pressEnter} createTodo={newTodo}/>
      </Route>
      <Route path='/todoList'>
        <TodoList/>
      </Route>
      <Redirect to='/todoList'/>
    </Switch>
  </>
  );
}

export default App;
