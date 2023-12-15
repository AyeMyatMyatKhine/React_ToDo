import { useState,useRef } from 'react'
import './CSS/todo.css'
import { useEffect } from 'react';
import { Todoitems } from './Todoitems';

let count = 0;
export const ToDo = () => {
  const [todo,setTodo] = useState([]);
  const inputRef = useRef(null);
  const add = () => {
    setTodo([...todo,{
      no: count++,
      text: inputRef.current.value,
      display: ""
    }]);
    inputRef.current.value = "";
    localStorage.setItem('todo-count',count);
  }

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem("todos")));
  },[])

  useEffect(() => {
    setTimeout(() => {
      console.log(todo)
      localStorage.setItem('todos',JSON.stringify(todo))
    },100)
  },[todo]);

  return (
    <div className='todo'>
        <div className="todo-header">To Do List</div>
        <div className="todo-add">
            <input ref={inputRef} type="text" placeholder='Add your task' className='todo-input' />
            <div className='todo-add-btn' onClick={() => {add()}}>ADD</div>
        </div>
        <div className="todo-list">
          {todo.map((item,index) => {
            return <Todoitems key={index} setTodo={setTodo} no={item.no} display={item.display} text={item.text}></Todoitems>
          })}
        </div>
    </div>
  )
}
