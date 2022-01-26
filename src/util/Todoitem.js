import React from 'react';


export const  Todo = ({todo,onDelete}) =>{
    return (

<div className="container">
<p>{todo.title}</p>
<p>{todo.data}</p>
<button onClick={()=>{onDelete(todo)}} className='btn btn-danger'> Delete</button>


</div>
    );
}



