import React, { useState } from "react";

const TodoList = () => {
  const [addTodo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  function handleAdd() {
    setTodoList((todoList) => {
      const updatedTodo = [...todoList, addTodo];
      setTodo("");
      return updatedTodo;
    });
  }
  function handleRemove(i){
     const updatedTodoList = todoList.filter((element,id)=>{
          return i!=id;
        })
        setTodoList(updatedTodoList);
  }
  function handleRemoveAll(){
    setTodoList([]);
  }

  return (
    <div>
      <div className="container">
        <h2 className="text-center mt-4">Todo List</h2>
        <div className="input-group mb-3">
          <input
            className="form-control custom-input"
            type="text"
            value={addTodo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a task"
          />
          <button className="btn btn-success" type="button" onClick={handleAdd}>
            + Add{" "}
          </button>
        </div>
        {todoList.length>=1 &&  <h2 className="text-center"> Your List</h2>}
       
        {todoList != [] &&
          todoList.map((data, i) => {
            return(
            <>
            <div  key={i}>
              <div className="alert alert-info">
                <div className="d-flex justify-content-between">
                {data}
                <button className="border-0 text-danger bg-white border-full rounded" onClick={()=>handleRemove(i)}>X</button>

                </div>
              </div>

            </div>
            </>
            )
        })}
        {todoList.length>=1 &&  <button className="text-center btn btn-danger d-block m-auto" onClick={handleRemoveAll}> Remove All</button>}
      </div>
    </div>
  );
};

export default TodoList;
