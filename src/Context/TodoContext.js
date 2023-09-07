import {createContext } from "react";
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const TodoContext = createContext();

const endPoint = "http://localhost:8080/api/todos";
//SetUp Context Provider

const TodoContextProvider =(p)=>{
    const [allTodos,setAllTodos] = useState([]);
    const [showTodos,setShowTodo] = useState([]);
    useEffect(() => {
        fetchAllTodo();
      }, []);

const searchTodo = (keyword)=>{
    if(keyword.trim()=="")return;
    const newSearchTodo = allTodos.filter((todoObj)=>{
        // todo.task.toLowerCase().includes(keyword.toLowerCase());
        return todoObj.task.toLowerCase().includes(keyword.toLowerCase());
    });
    setShowTodo(newSearchTodo);
    // console.log(newSearchTodo);
}
    
    const fetchAllTodo = async () => {
        try {
            let res = await fetch("http://localhost:8080/api/todos", { method: "GET" });
            let todoData = await res.json();
            const newTodoLists = todoData.todos.map((todo) => {
                const newTodo = { ...todo, due_date: todo.date };
                delete todo.date;
                return newTodo;
            })
            // setAllTodos(todoData.todos);
            setAllTodos(newTodoLists);
            setShowTodo(newTodoLists);
            // console.log(todoData)
        } catch (err) {
            console.log(err)
        }
        
    }
 // add : CreateTodo
    const addTodo = async function (taskName) {
        const newTodo = {
            // id: nanoid(),
            task: taskName,
            status: false,
            due_date: dayjs().format('YYYY-MM-DD'),
        };
        // setAllTodos((p) => [newTodo, ...p]);

        try {
            const option = {
                method: "POST", headers: {
                    "Content-type": "application/json",
                }, body: JSON.stringify(newTodo)
            };
            let res = await fetch(endPoint, option);
            let data = await res.json();
            const createTodo = { ...data.todo, due_date: data.todo.date };
            delete createTodo.date;

            // console.log(data);
            // setAllTodos((p) => [data.todo, ...p]);
            setAllTodos((p) => [createTodo, ...p]);
            setShowTodo((p) => [createTodo, ...p]);
        }
        catch (err) {
            console.log(err);
        }
    };

    // delete : DeleteTodo
    const deleteTodo = async function (todoId) {
        try {
            const option = { method: "DELETE" };
            let res = await fetch(`${endPoint}/${todoId}`, option);

            if (res.status == 204){
                setAllTodos((prev) => prev.filter((todo) => todo.id !== todoId));
                setShowTodo((prev) => prev.filter((todo) => todo.id !== todoId));

            }
        }
        catch (err) {
            console.log(err);
        }

    };

    // edit : UpdateTodo
    const editTodo = async function (todoId, updateTodoObj) {
        try {
            let foundIndex = allTodos.findIndex((todo) => todo.id === todoId);
            if (foundIndex !== -1) {
                const updateTodo = { ...allTodos[foundIndex], ...updateTodoObj };
                const option = {
                    method: "PUT",
                    headers: { "Content-type": "application/json", },
                    body: JSON.stringify(updateTodo),
                }

                const res = await fetch(`${endPoint}/${todoId}`, option);
                const data = await res.json();
                console.log(data.todo);
                const newTodoLists = [...allTodos];
                newTodoLists[foundIndex] =  { ...data.todo, due_date: data.todo.date };
                setAllTodos(newTodoLists);
                setShowTodo(newTodoLists);

            }
        }
        catch (err) {
            console.log(err);
        }

        // const newTodoLists = allTodos.reduce((acc, todo) => {
        //     if (todo.id !== todoId) acc.push(todo);
        //     else acc.push({ ...todo, ...updateTodoObj });
        //     return acc;
        // }, []);
        
    };

    const shareObj = {allTodos, fetchAllTodo, addTodo, editTodo, deleteTodo,showTodos,searchTodo};
    return <TodoContext.Provider value={shareObj}>{p.children}</TodoContext.Provider>
}

export default TodoContextProvider;
export {TodoContext};