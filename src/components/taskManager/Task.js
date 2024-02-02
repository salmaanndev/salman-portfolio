import React from 'react'
import './Task.css'

const Task = ({task, index, removeTask}) => {
  return (
    <div className='task'>
        <p> {task}</p>
        <button onClick={() => removeTask(index)}>Remove</button>
    </div>
  )
}

export default Task
