import React, {useState} from 'react'

function Body(props){
    const [tasks, setTask] =useState(['Eat','Sleep','Repeat']);
    const [newTask, setNewTask] =useState("");

    function handleInputChange(e){
        setNewTask(e.target.value);
    }
    function addTask(){
        if(newTask.trim() !==""){
            setTask([...tasks, newTask]);
            setNewTask("");
        }
    }
    function delTask(index){
        const updatedTask = tasks.filter((element,i) => i !==index); 
        setTask(updatedTask);
    }

    return(
        <div className="body">
            <h1>To do list</h1>
            <p>A responsive todo list using React and javascript</p>
            <div className='addTask-form'>
                <input type="text" value={newTask} onChange={handleInputChange} placeholder="Insert New Task"/>
                <button className="addBtn" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task,index) =>
                    <li key={index}>
                        {task}
                        <button className="delBtn" onClick={() => delTask(index) }>Delete</button>
                    </li>
                )}
            </ol>

        </div>
    );
}
export default Body