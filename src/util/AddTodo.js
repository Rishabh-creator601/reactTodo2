import React,{useState} from "react";


export const  AddTodo = ({addtodo}) => {

    const [title,setTitle] =  useState("");
    const [desc,setDesc] =  useState("");

    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Both Must Be Not Empty !")
        }
        else{
            addtodo(title,desc);
        }
    }

  return (
   <>

   <center><h3>Add A New Todo</h3></center>
   <div className="container">

    <form onSubmit={submit}>

        <input type='text' value={title} className="form-control" placeholder='enter title' onChange={((e)=>{
            setTitle(e.target.value);
        })}/>

        <input type='text' value={desc} className="form-control" placeholder='enter desc here' onChange={((e)=>{
            setDesc(e.target.value)
        })}/>

<button type="Submit" className="btn btn-primary "> Add Todo  </button>

    </form>

   </div>
   
   
   
   </>
   
  );
};
