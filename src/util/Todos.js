import React from "react";
import {Todo}  from "../util/Todoitem";


export default function TodoList(props){


    return (
       <div className='container'>

        <center> <p> Todo List</p></center>

        {props.todos.map((todo)=>{

            return <Todo key={todo.sno}
            onDelete={props.onDelete}
            todo={todo} />
        })}



       </div>
    );
}



