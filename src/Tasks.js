import './Tasks.css'
import { useState } from "react";

export const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [description, setDescription] = useState('');

    const removeTask = (task) => {
        setTasks(tasks.filter(x => x.id !== task.id));
    }

    const toggleTask = (task) => {
        setTasks(tasks.map(x=> {
            if (x.id === task.id){
                x.done = !x.done;
            }
            return x;
        }))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-6 col-xs-offset-3">                
                    <div className="panel panel-default">                   
                        <div className="panel-body">   
                            <h2 style={{textAlign: 'center'}}>Tasks (React.js)</h2>
                            <div>
                                <label htmlFor="description">Task</label>&nbsp;
                                <input id="description" type="text" placeholder="Task description" value={description} 
                                    onChange = {e => setDescription(e.target.value)}
                                />&nbsp;
                                <button type="button" className='btn btn-primary' onClick={
                                    () => {
                                        if (description){
                                        setTasks([...tasks, { id: tasks.length + 1, description: description, done: false }]);
                                        setDescription('');
                                        }
                                        else {
                                            alert('Please enter the task description')
                                        }
                                    }
                                }>
                                    Add
                                </button>
                            </div>
                            <div>
                                <ul className='list-group'>
                                    {
                                        tasks.map(x => (
                                            <li key={x.id} className='list-group-item'>
                                                <input id="done" type='checkBox' value={x.done} onChange={(e) => toggleTask(x)}></input>
                                                <label htmlFor='done'>
                                                    <span>{x.description}</span>                                                 
                                                </label>
                                                <button className='btn btn-primary' type="button" 
                                                onClick={() => removeTask(x)}>Delete</button> 
                                            </li>
                                            )
                                        )
                                    }
                                </ul>
                            </div>   
                        </div> 
                    </div>  
                </div>         
            </div>        
        </div>
        );
}