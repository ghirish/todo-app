export function Tabs(props){
    const {todos, selectedTab, setSelectedTab} = props
    const tabs = ['All', 'Open', 'Completed']
    return(
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                let filtered = todos; 
                if (tab === 'Open') filtered = todos.filter(t => !t.complete);
                else if (tab === 'Completed') filtered = todos.filter(t =>  t.complete);
                
                const numOfTasks = filtered.length;
                return( 
                    <button key={tabIndex}
                    className={"tab-button " + (tab === selectedTab ? 'tab-selected': ' ')}
                    onClick={() => setSelectedTab(tab)}>
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}
            <hr/>
        </nav>
    )
}