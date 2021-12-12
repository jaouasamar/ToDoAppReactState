import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({taskList, deleteTask, complete}) => {
    return (
        <div>
        {taskList.map(elt=>(
            <TaskItem elt={elt} id={elt.id} deleteTask={deleteTask} complete={complete}/>
        )
            )}
        </div>
    )
}

export default TaskList
