import React,{Fragment,useEffect,useState} from 'react';
import EditTodo from './EditTodo'
const ListTodos=()=>{
    const [task_name,setTask]=useState([]);

    //delete function
    const deleteTask=async(id)=>{
        try {
           const deleteTask=await fetch(`http://localhost:5000/api/task/${id}`,{
               method:'DELETE'
           }); 
           setTask(task_name.filter(task=>task.id!=id))
            
        } catch (err) {
           console.error(err.message);
            
        }
    }

    const getTask=async()=>{
        try {
            const response=await fetch('http://localhost:5000/api/tasks')
            const jsonData=await response.json()
            setTask(jsonData);
            

        } catch (err) {
            console.error(err.message)
        }
    }
    useEffect(() => {
        getTask();
      }, []);

   
      
    return <Fragment>
    <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Task Name</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
      {task_name.map(task=>(
          <tr key={task.id}>
        <td>{task.task_name}</td>
        <td><EditTodo task={task}/></td>
        <td><button className='btn btn-danger' onClick={()=>deleteTask(task.id)}>Delete</button></td>
        </tr>
      ))}
      
    </tbody>
  </table>
  </Fragment>
}

export default ListTodos;