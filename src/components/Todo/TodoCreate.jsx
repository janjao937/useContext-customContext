import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';

import TodoForm from './TodoForm';
import styles from './TodoCreate.module.scss';



/* 
CC1 - Condition Rendering
- Default : Show Button & Text
- Active : Show TodoForm

 Concept : true ? <AddTask/> : <TodoForm/>
*/

/* 
CC2 - EVENT HANDLING
- เอาฟังก์ชันไปผูกติดกับ UI เพื่อให้ USER เป็นคนเรียกใช้ฟังก์ชันเอง
- onClick : ต้อง Click ก่อน , FN ถึงจะรัน
    - User ทำการคลิก
    - Browser จะเป็นคนเรียกใช้ฟังก์ชัน โดยส่ง parameter มา 1 ตัว
      handleClick(eventObject)
*/

/* 
CC3 - JS Value ไม่สามารถทำให้ React Rerender ได้
ต้องใช้ State
*/

/*
CC-4 Array Destructuring
function myUseState() {
  return [5,9]
}
let  [a,b] = myUseState()
a === 5
b === 9

function myUseState(initial) {
  return [initial,9]
}
let  [a,b] = myUseState(5)
a === 5
b === 9
*/

/* 
CC5 - React State (1 ในฟังก์ชันของกลุ่ม React Hook)
  const [state,setState] = useState(initialState:any)
  // element 1: current State
  // element 2 : Fn สำหรับ SetState
  // เมื่อ State เปลี่ยน Function Component จะ Rerender
  // Rerender 1 ครั้ง == Code ทั้งหมดใน FC จะถูกรันใหม่ 1 ครั้ง
*/

function TodoCreate() {
  const [isOpenForm, setIsOpenForm] = useState(false);
 
  const handleClick = function () {
    setIsOpenForm(!isOpenForm);
  };

  return (
    <>
      {isOpenForm ? (
        <TodoForm textSubmit='Add Task' setIsOpenForm={setIsOpenForm} />
      ) : (
        <div className={styles.todo__create} onClick={handleClick}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}

export default TodoCreate;
