import {Header} from './components/Header.jsx'
import { Tabs } from './components/Tabs'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

import { useState, useEffect } from 'react'

function App() {
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  //   ]

  const [todos, setTodoList] = useState([{ input: 'Hello! Add your first todo!', complete: true }])
  const [selectedTab , setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo){
    const newTodoList = [...todos, {input:newTodo, complete: false}]
    setTodoList(newTodoList)
    handleSaveData(newTodoList)

  }
  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodoList(newTodoList)
    handleSaveData(newTodoList)

  }
  function handleCompleteTodo(index){
    let newTodoList = [...todos]
    let completeTodo = newTodoList[index]
    completeTodo['complete'] = true
    newTodoList[index] = completeTodo
    setTodoList(newTodoList)
    handleSaveData(newTodoList)
    
  }

  function handleSaveData(currTodos){
    localStorage.setItem('todo-app',JSON.stringify({todos: currTodos}))
  }

  useEffect(()=>{
    if(!localStorage || !localStorage.getItem('todo-app')) { return }
    
    const db = JSON.parse(localStorage.getItem('todo-app'))
    setTodoList(db.todos)
  },[])

  return(
    <>
      <Header todos={todos}/>
      <Tabs todos={todos} selectedTab ={selectedTab} setSelectedTab ={setSelectedTab}/>
      <TodoList todos={todos} selectedTab = {selectedTab} handleDeleteTodo = {handleDeleteTodo} handleCompleteTodo = {handleCompleteTodo}/>
      <TodoInput handleAddTodo={handleAddTodo}/>


    </>
  )
}

export default App
