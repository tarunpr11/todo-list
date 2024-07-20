import { useState } from "react"

export default function TodoInput(props) {
    const {handleAdd, TodoValue, setTodoValue} = props
    return (
        <header>
            <input placeholder="Enter todo..." value = {TodoValue} onChange={(e)=>{
                setTodoValue(e.target.value)
            }}/>
            <button onClick={()=>{
                handleAdd(TodoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}