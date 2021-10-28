import React,{FC} from 'react'
import { ITodo } from '../type/type'
import {useLocation} from 'react-router-dom'

interface IForm {
    text?:string
    edit?:ITodo|null|undefined
    input:string
    handleInput:(e:React.ChangeEvent<HTMLInputElement>)=>void
    pressEnter?:(e:React.KeyboardEvent<HTMLInputElement>)=>void
    updateTodo?:(title:string,id:string,completed:boolean,userId:number)=>void 
    createTodo?:()=>void
    isDisabled?:any
    setIsDisabled?:any
}

const Form:FC<IForm> = ({isDisabled,setIsDisabled,input,handleInput,pressEnter,text,updateTodo,createTodo,edit}) => { 
    
    const {pathname} = useLocation()


    const click = () => {
        if(edit){
            updateTodo!(input,edit.id,edit.completed,edit.userId)
            setIsDisabled(true)
        } else {
            createTodo!()
        }
    }


    return (
        <div className='container_form'>
            <input disabled={isDisabled}  className='container_form_input'  onKeyUp={pressEnter} onChange={(e)=>handleInput(e)} type="text" value={input} placeholder='write todo...'/>
            <button disabled={isDisabled} className={pathname === '/createTodo' ?'container_form_create' :'container_form_button'} onClick={click} >{text}</button>
        </div>
    )
}

export default Form
