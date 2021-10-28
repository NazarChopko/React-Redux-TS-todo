import React,{FC} from 'react'
import {ITodo} from '../type/type'
import classNames from 'classnames'

interface ITodoItemProps{
    todo:ITodo;
    deleteTodo:(id:string)=>void;
    isCompletedTodo:(id:string)=>void;
    editTodo:(id:string)=>void
}


const TodoItem:FC<ITodoItemProps> = ({ todo,deleteTodo,isCompletedTodo,editTodo}) => {

    const {title,id,completed,} = todo

    const isCompleted = classNames({
        'container_todoItem_title':!completed,
        'container_todoItem_title_completed':completed
    })
    
    
    return (
        <div className='container_todoItem'>
            <div className={isCompleted}>{title}</div>
            <div className='container_todoItem_svg'>
                <span className='completed' onClick={()=>isCompletedTodo(id)}><svg id="Bold" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m.828 13.336c-.261.304-.388.691-.357 1.091s.215.764.52 1.024l7.403 6.346c.275.235.616.361.974.361.044 0 .089-.002.134-.006.405-.036.77-.229 1.028-.542l12.662-15.411c.254-.31.373-.7.334-1.099-.04-.399-.231-.759-.541-1.014l-2.318-1.904c-.639-.524-1.585-.432-2.111.207l-9.745 11.861-3.916-3.355c-.628-.536-1.576-.465-2.115.163z"/></svg></span>
                <span className='edit' onClick={()=>editTodo(id)}><svg id="_x31_" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11.894 24c-.131 0-.259-.052-.354-.146-.118-.118-.17-.288-.137-.451l.707-3.535c.02-.098.066-.187.137-.256l7.778-7.778c.584-.584 1.537-.584 2.121 0l1.414 1.414c.585.585.585 1.536 0 2.121l-7.778 7.778c-.069.07-.158.117-.256.137l-3.535.707c-.032.006-.065.009-.097.009zm1.168-3.789-.53 2.651 2.651-.53 7.671-7.671c.195-.195.195-.512 0-.707l-1.414-1.414c-.195-.195-.512-.195-.707 0zm2.367 2.582h.01z"/><path d="m9.5 21h-7c-1.379 0-2.5-1.121-2.5-2.5v-13c0-1.379 1.121-2.5 2.5-2.5h2c.276 0 .5.224.5.5s-.224.5-.5.5h-2c-.827 0-1.5.673-1.5 1.5v13c0 .827.673 1.5 1.5 1.5h7c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path d="m16.5 12c-.276 0-.5-.224-.5-.5v-6c0-.827-.673-1.5-1.5-1.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c1.379 0 2.5 1.121 2.5 2.5v6c0 .276-.224.5-.5.5z"/><path d="m11.5 6h-6c-.827 0-1.5-.673-1.5-1.5v-2c0-.276.224-.5.5-.5h1.55c.232-1.14 1.243-2 2.45-2s2.218.86 2.45 2h1.55c.276 0 .5.224.5.5v2c0 .827-.673 1.5-1.5 1.5zm-6.5-3v1.5c0 .275.225.5.5.5h6c.275 0 .5-.225.5-.5v-1.5h-1.5c-.276 0-.5-.224-.5-.5 0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5c0 .276-.224.5-.5.5z"/><path d="m13.5 9h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path d="m13.5 12h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path d="m13.5 15h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"/></svg></span>
                <span className='delete' onClick={()=>deleteTodo(id)} ><svg id="Layer_1" enable-background="new 0 0 512 512" height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg"><g><path d="m424 64h-88v-16c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16h-88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zm-216-16c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96z"/><path d="m78.364 184c-2.855 0-5.13 2.386-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042c.136-2.852-2.139-5.238-4.994-5.238zm241.636 40c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z"/></g></svg></span>
            </div>
        </div>
    )
}

export default TodoItem
