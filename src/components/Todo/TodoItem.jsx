import { useState} from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';

import TodoForm from './TodoForm';
import styles from './TodoItem.module.scss';
import useTodo from '../../hooks/useTodo';


// function TodoItem(props) {
// Object Destructuring (Props)
// const { task, done, date } = props;

function TodoItem({ id, task, done, date}) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const {deleteTodo,editTodo} =  useTodo();

  const handleClick = function () {
    setIsOpenForm(!isOpenForm);
  };

  const toggleStatus = () => {
    editTodo(id, { status: !done });
  };
  return (
    <>
      {isOpenForm ? (
        <TodoForm
          textSubmit='Edit Task'
          setIsOpenForm={setIsOpenForm}
          editTodo={editTodo}
          oldTodo={{ id, task, done, date }}
        />
      ) : (
        <li className={styles.todo}>
          <div className={`${styles.todo__checkbox}  ${done ? styles.todo__checkbox__done : ''}`}>
            <HiOutlineCheck className={styles.todo__checkbox__icon} onClick={toggleStatus} />
          </div>
          <p className={`${styles.todo__task} ${done ? styles.todo__task__done : ''}`}>{task}</p>
          <span className={styles.todo__date}>{date}</span>
          <div className={styles.todo__action}>
            <span onClick={handleClick}>
              <FaPen className={styles.todo__edit} />
            </span>
            <span>
              <FaTrashAlt className={styles.todo__delete} onClick={() => deleteTodo(id)} />
            </span>
          </div>
        </li>
      )}
    </>
  );
}

export default TodoItem;
