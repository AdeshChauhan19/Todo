import React, { Fragment, useState } from "react";

const EditTodo = ({task}) => {
 
  const[task_name,setTask_name]=useState(task.task_name);

  //Edit taskname_Function

  const updateTask_name=async e=>{
    e.preventDefault();
    try {
      const body={task_name};
      const response=await fetch(`http://localhost:5000/api/task/${task.id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
      })
      window.location='/';
    } catch (error) {
      console.error(error.message)
    }
  }


  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${task.id}`}
      >
        Edit
      </button>

      <div class="modal" id={`id${task.id}`}
      onClick={()=>setTask_name(task.task_name)}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Task</h4>
              <button type="button" class="close" data-dismiss="modal"
              onClick={()=>setTask_name(task.task_name)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input type="text" 
              className="form-control"
              value={task_name}
              onChange={e=>setTask_name(e.target.value)}
              /></div>

            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-dismiss="modal"
              onClick={e=>updateTask_name(e)}
              >
                Edit
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal"
              onClick={()=>setTask_name(task.task_name)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
