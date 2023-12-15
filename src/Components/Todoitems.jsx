import './CSS/Todoitems.css'
import tick from './Assets/orange-tick.jpg'
import untick from './Assets/images.png'
import trash from './Assets/trash-can.jpg'

export const Todoitems = ({no,display,text,setTodo}) => {
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i = 0;i < data.length;i++){
      if(data[i].no === no){
        if(data[i].display === ""){
          data[i].display = "line-through"
        } else {
          data[i].display = ""
        }
      }
    }
    setTodo(data)
  }

  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem('todos'));
    data = data.filter((todo) => todo.no !== no);
    setTodo(data);
  }

  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={() => {toggle(no)}}>
        {display === "" ? <img src={untick} alt="" className='checkbox-icon'/> : <img src={tick} alt="" className='checkbox-check-icon'/>}
        <div className='todoitems-text'>{text}</div>
      </div>
      <img src={trash} alt="" className='trash-icon' onClick={() => {deleteTodo(no)}}/>
    </div>
  )
}
