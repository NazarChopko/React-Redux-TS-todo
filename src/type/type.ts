


export interface ITodo{
    userId: number
    id: string 
    title: string
    completed: boolean
}

export enum TodoActionTypes {
    GET_AXIOS_TODO = 'GET_AXIOS_TODO',
    DELETE_TODO = 'DELETE_TODO',
    CREATE_TODO = 'CREATE_TODO',
    IS_COMPLETED = 'IS_COMPLETED',
    UPDATE_TODO = 'UPDATE_TODO',
}

interface GetAxiosTodoAction{
    type:TodoActionTypes.GET_AXIOS_TODO
    payload:ITodo[]
}

interface DeleteTodoAction{
    type:TodoActionTypes.DELETE_TODO
    payload:ITodo[]
}

interface CreateTodoAction{
    type:TodoActionTypes.CREATE_TODO
    payload:ITodo
}

interface IsCompletedTodoAction{
    type:TodoActionTypes.IS_COMPLETED
    payload:ITodo[]
}

interface UpdateTodoAction{
    type:TodoActionTypes.UPDATE_TODO
    payload:ITodo[]
}

export type TodoActions = GetAxiosTodoAction | DeleteTodoAction |  CreateTodoAction |IsCompletedTodoAction|UpdateTodoAction 

export interface getAxiosTodoItems{
    config:Object
    data:ITodo[]
    headers:Object
    request:any
    status:number
    statusText:string
}