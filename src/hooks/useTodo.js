import { useContext } from "react";
// import dayjs from 'dayjs';
import { TodoContext } from "../Context/TodoContext";

// const endPoint = "http://localhost:8080/api/todos";

const useTodo = () => {
    const shareObject = useContext(TodoContext);
    return shareObject
}

export default useTodo;