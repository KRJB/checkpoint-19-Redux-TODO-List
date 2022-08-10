import React, { useState } from 'react'
import '../App.css';
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE, FINISHED } from '../JS/constant/actionsType'
import AddTask from './AddTask'
import EditTask from './EditTask'


const ListTask = () => {
  const dispatch = useDispatch();

    const listTask = useSelector((state)=>state.task.listTask)
    const [taskState ,setTaskState] = useState("All");
    const finishedTask = (id) =>{
      dispatch({type: FINISHED,payload:id})
    }

  return (
    <div>
      <div style={{display:'flex',   alignItems: 'center',    flexDirection: 'column'}}>
      <AddTask/>

        <div style={{marginTop:'10px'}}>
      <Button style={{ margin: "5px" }} variant="outline-success" onClick={()=>setTaskState("done")} >
        Finished Tasks
      </Button>
      <Button style={{ margin: "5px" }} variant="outline-warning" onClick={()=>setTaskState("undone")}>
        Incomplete Tasks
      </Button>
      <Button style={{ margin: "5px" }} variant="outline-primary" onClick={()=>setTaskState("All")} >
        All Tasks
      </Button>    
      </div>
      {(taskState==="done"?listTask.filter(task=>task.isDone===true) : taskState==="undone" ?listTask.filter(task=>task.isDone===false) : listTask).map((task,id)=>  
          
        <div key={id} style={{display:'flex', flexDirection: 'column'}}>
          <hr style={{width:'700px',alignSelf:'center'}}/>
          <div style={{display:'flex',  alignItems: 'center',justifyContent:'space-between'}}>
            <p id='task ' style={task.isDone ?{textDecoration: "line-through"} : {}}>{task.text}</p>
            <div style={{display:'flex',  alignItems: 'center'}}>
            <Button style={{margin:'5px'}} variant="outline-success" onClick={()=>finishedTask(task.id)} >✓</Button>
            <Button style={{margin:'5px'}} variant="outline-danger"  onClick={()=>dispatch({type:DELETE,payload:task.id})}>✕</Button>
            <EditTask task={task} newId={task.id} />
          </div>
          </div>
        </div>
    
           )}
      </div>
    </div>
  )
}

export default ListTask