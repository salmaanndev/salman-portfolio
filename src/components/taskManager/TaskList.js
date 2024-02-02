import './Task.css'
import TaskForm from './TaskForm'

const TaskList = ({ id }) => {



    return (
        <div id={id} className='taskList'>
            <TaskForm />
        </div>
    )
}

export default TaskList
