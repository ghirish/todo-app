import { TodoCard } from "./TodoCard"
export function TodoList(props){
    //const tab = 'All'
    const {todos, selectedTab, handleDeleteTodo, handleCompleteTodo} = props
    let filterTodoList = todos
    if(selectedTab === 'All') filterTodoList = todos
    if(selectedTab == 'Completed') filterTodoList = todos.filter(t => t.complete) 
    if(selectedTab == 'Open') filterTodoList = todos.filter(t => !t.complete)

    
    return (
        <>
            {filterTodoList.map((todo, todoIndex)=>{
                const originalIndex = todos.findIndex(t => t.input === todo.input);
                return (
                    <TodoCard 
                    key = {todoIndex} 
                    todoIndex = {originalIndex} 
                    todo= {todo}
                    handleDeleteTodo = {handleDeleteTodo}
                    handleCompleteTodo = {handleCompleteTodo}
                    />
                )
            })}
        </>
        
    )
}