import React, { useState } from 'react'
import './Task.css'
import Task from './Task'


const TaskForm = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <>
            <div className='tasklist'>
                <h1>Add your daily tasks</h1>
                <div className='taskForm'>
                    <h1>TO-DO-LIST</h1>
                    <input type='text' value={newTask} placeholder='Add To-Do' onChange={(e) => setNewTask(e.target.value)} />
                    <button onClick={addTask} >Add</button>
                </div>
                <div className='tasks' >
                    <h1>LIST-OF-TASKS</h1>
                    {tasks.map((task, index) => (
                        <>
                            <Task key={index} task={task} removeTask={removeTask} />

                        </>
                    ))}
                </div>
            </div>


        </>
    )
}

export default TaskForm
