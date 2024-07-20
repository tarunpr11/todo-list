import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos,setTodos] = useState([])

  const [TodoValue,setTodoValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos: newList}))
  }

  function handleAdd(newTodo){
    const newTodoList = [...todos,newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDelete(index){
    const newTodoList = todos.filter((todo,todoIndex) => {
      return todoIndex != index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEdit(index){
    const editValue = todos[index]
    setTodoValue(editValue)
    handleDelete(index)
  }

  useEffect(()=>{
    if(!localStorage){
      return 
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return 
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput handleAdd = {handleAdd} TodoValue = {TodoValue} setTodoValue = {setTodoValue}/>
      <TodoList todos = {todos} handleDelete = {handleDelete} handleEdit = {handleEdit}/>
    </>
  )
}

export default App
