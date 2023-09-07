// Dependencies
import {useEffect,useContext } from 'react';
import { nanoid } from 'nanoid';
import './App.scss';
import AppBar from '../components/Common/AppBar/AppBar';
import SideBar from '../components/SideBar/SideBar';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoLists from '../components/Todo/TodoLists';
// import useTodo from "../hooks/useTodo.js";

import { TodoContext } from '../Context/TodoContext.js';

// const data = [
//   { id: nanoid(), task: 'Suspendisse potenti.', status: false, due_date: '2023-04-26' },
//   {
//     id: nanoid(),
//     task: 'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
//     status: false,
//     due_date: '2023-05-08',
//   },
//   {
//     id: nanoid(),
//     task: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
//     status: false,
//     due_date: '2023-04-30',
//   },
// ];

function App() {
  // const [allTodos, setAllTodos] = useState([]);
 
  const {allTodos,fetchAllTodo,addTodo,editTodo,deleteTodo} = useContext(TodoContext);

  const shearObj = useContext(TodoContext);
  // console.log(shearObj);
  
  useEffect(()=>{
    
    fetchAllTodo();
  },[]);


  return (
    <div className='todo'>
      <div className='todo__header'>
        <AppBar />
      </div>
      <div className='todo__sidebar'>
        <SideBar />
      </div>
      <div className='todo__content'>
        <main className='todo__container'>
          <TodoHeader />
          <TodoCreate />
          <TodoLists />
        </main>
      </div>
    </div>
  );
}

export default App;
