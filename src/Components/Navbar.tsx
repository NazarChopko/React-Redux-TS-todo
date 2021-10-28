import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const Navbar:React.FC = () => {

const {pathname} = useLocation()
console.log(pathname)

    return (
        <nav className='navbar_container'>
            <Link style={{color:pathname=== '/createTodo' ?'#e1b382' :''}} to='/createTodo'>Create ToDo </Link>
            <span>/</span>
            <Link style={{color:pathname === '/createTodo' ?'' :'#e1b382'}} to='/todoList'>ToDo List</Link>
        </nav>
    )
}

export default Navbar
