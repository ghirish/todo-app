export function Header(props){
    const {todos} = props
    const todoListLength = todos.length
    const isTaskPlural = todoListLength != 1
    const taskOrTasks = isTaskPlural ? 'tasks' : 'task'
    return(
        <header>
            <h1 className="text-gradient">You have {todoListLength} open {taskOrTasks}.</h1>
        </header>
    )
}