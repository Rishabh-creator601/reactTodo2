import logo from './logo.svg';
import './App.css';
import Header from "./util/Header";
import {AddTodo} from "./util/AddTodo";
import TodoList from "./util/Todos";
import { useState } from 'react/cjs/react.development';

function App() {

// Ondelete Function
function onDelete(todo){
    setValues(values.filter((val)=>{
      return val !== todo;
    }));
  }


  // Add Todo Function 



  const addtodo = (title,desc) =>{


    let sno = values[values.length - 1].sno  + 1;
    let newTodo = {
      sno:sno,
      title:title,
      data:desc
    }


    setValues([...values,newTodo]);

  }

  // Pre Filled Todos 

  const [values,setValues] =  useState([
    {
      "sno":1,
      "title":"Library",
      "data":"Read Books"
    },{
      "sno":2,
      "title":"Learn Chapter",
      "data":"Learn chapter 3"
    }
  ])

  
  return (
 <>
  <Header />
  < AddTodo addtodo={addtodo}/>
  <TodoList todos={values} onDelete={onDelete}/>

  </>

  );
}

export default App;
