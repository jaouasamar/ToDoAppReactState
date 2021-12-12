import React from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import './TaskItem.css';

const TaskItem = ({elt,deleteTask,complete}) => {
    return (
        <div className="taskItem">
            <p className={elt.isDone?"line":null}>{elt.task}</p>
         
            <DoneOutlineRoundedIcon onClick={()=>complete(elt.id)}/>
            <DeleteRoundedIcon onClick={()=>deleteTask(elt.id)}/>
        </div>
    )
}

export default TaskItem
