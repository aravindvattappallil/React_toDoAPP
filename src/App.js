import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos,settodos] = useState([])
  const[todo,settodo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange = {(e)=>settodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{settodos([...todos,{id: Date.now(), text:todo, status:false}])}} className="fas fa-plus"></i>
      </div>{ 
      todos.map((value)=>{ 
        return( 
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{settodos(todos.filter(obj=>{
              if(obj.id===value.id){
                obj.status=e.target.checked
              }
              return obj
            }))}} value={value.status} type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>)}
      )}
      {
        todos.map((obj)=>{
          if(obj.status){
            return(<h1>{obj.text}</h1>)
          }
          return null
        })
      }
    </div>
  );
}

export default App;
