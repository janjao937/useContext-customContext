# 0 Setup Project

- `npx create-react-app <project-name>`
- `cd <project-name>`
- `npm start` or `npm run start` or `npx react-scripts start`
- auto open browser localhost:3000

# 1 About Project

- Other code เรียกว่า Dependencies อยู่ใน node_modules

  - ลบทิ้งได้
  - ติดตั้งใหม่ด้วย `npm install` จะทำการติดตั้ง dependencies ที่อยู่ใน package.json ให้อัตโนมัติ

- Code เราเอง อยู่ใน src/

# 2 : Clean up Project - remove unnecessary thing

- clean up index.js
- clean up App.js, App.css
- clean up public/index.html
- remove unnecessary file
- restructure folder to app/ component/

# 3 : CSS setup

#### 3.1 : ติดตั้ง scss

- ติดตั้ง `sass` เพื่อช่วยให้การเขียน CSS แบบ BEM สะดวกมากขึ้น
- รันคำสั่ง `npm install sass` ลงใน terminal (อย่าลืม check path ว่าอยู่ที่ root project แล้ว : ตำแหน่งที่มี file package.json)
- ตรวจสอบ dependencies ในไฟล์ package.json ว่ามี `sass` แล้ว

#### 3.2 : setup index.scss

- ไฟล์ index.css : ให้แปลงนามสกุลไฟล์ เป็น index.scss
- ไฟล์ index.js : เปลี่ยนการ import จาก index.css เป็น index.scss

#### 3.3 : CSS Global Reset

- ไฟล์ index.scss : เขียน css rule เพื่อลบ default padding,margin ต่างๆ รวมถึงวิธีการวัดขนาดของ Box-model

```css
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%; /*equal font-size : 10px*/
}

body {
  box-sizing: border-box;
}
```

#### 3.4 : Typography

- ไฟล์ index.scss : ให้ทำการ import google font

```css
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&family=Source+Sans+Pro:wght@400;600;700&display=swap');
```

- ไฟล์ index.scss : ทำการเพิ่ม font หลักของ application (Nunito) ลงใน tag body

```css
body {
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

#### 3.5 : Color

- knowledge : scss มีความสามารถในการสร้างตัวแปรไว้ใช้ได้
- ไฟล์ index.scss : สร้างตัวแปรสำหรับเก็บสีหลักๆของ web-application

```css
$primary: #db4c3f;
$grey-light: #eaeaea;
$grey-dark: #808080
$white: #fff;
```

# 4 : App Layout (or Page layout)

- วาง layout ของหน้าหลัก (ในที่นี้เรามี 1 หน้า)
- ในไฟล์ App.js วาง markup สำหรับทำ layout

```css
   <div className='todo'>
        <div className="todo__header">Header</div>
        <div className="todo__sidebar">SideBar</div>
        <div classNAme="todo_content">TodoContent</div>
    </div>
```

- สร้างไฟล์ App.scss
- ไฟล์ App.scss : เขียน css สำหรับจัด layout

```scss
$header-height: 44px;
$sidebar-width: 300px;

.todo {
  display: grid;
  grid-template-rows: $header-height calc(100vh - $header-height);
  grid-template-columns: $sidebar-width calc(100vw - $sidebar-width);

  &__header {
    grid-column: 1/3;
    grid-row: 1/2;
  }

  &__sidebar {
    grid-row: 2/3;
    grid-column: 1/2;
    // position: sticky;
  }

  &__content {
    grid-row: 2/3;
    grid-column: 2/3;

    // other css
    overflow-y: scroll;
    padding: 20px 30px;
    padding-top: 0;
  }
}
```

- ไฟล์ App.scss : ปรับนามสกุลไฟล์ เป็น App.module.scss
- หากมี error จากการหา variable ไม่เจอ : ให้ import global css เข้ามาใช้งาน
- ไฟล์ App.jsx : implement styles ลงไฟล์ App.jsx

```jsx
import styles from 'App.module.scss';

<div className={styles.todo}>
  <div className={styles.todo__header}>Header</div>
  <div className={styles.todo__sidebar}>SideBar</div>
  <div classNAme={styles.todo__content}>TodoContent</div>
</div>;
```

# 5.1 : AppBar or HeaderComponent

- ติดตั้ง library สำหรับทำ icon : `npm install react-icons` [link to npm](https://www.npmjs.com/package/react-icons) ,[link to document](https://react-icons.github.io/react-icons/)

- สร้างไฟล์ Header.jsx สำหรับทำ Header

```jsx
<header className='header'>
  {/* Logo */}
  <div className='header__logo'></div>

  {/* Text */}
  <div className='header__text'>
    <h3>Todoist</h3>
  </div>

  {/* Search */}
  <div className='header__search'></div>
</header>
```

- สร้างไฟล์ Header.module.scss สำหรับ css

```scss
// import global.scss
.header {
  background-color: $primary;
  color: $grey-light;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 20px;

  &__logo {
    display: flex;
    cursor: pointer;
    font-size: 24px;
  }

  &__text {
    flex: 1;
  }
  &__search {
    min-width: 300px;
  }
}
```

- import styles มาใช้ใน JSX
- implement styles กับ className

```jsx
import styles from './Header.module.scss';

// implement styles กับ className
```

#### 5.1.1 : Logo

- แทรก Logo Home ลงใน container

```jsx
import { FaHome } from 'react-icons/fa';
```

```jsx
// add this code in return statement
<div className='header__logo'>
  <FaHome />
</div>
```

#### 5.1.2 : Search

- สร้างไฟล์ Search.jsx
- สร้างไฟล์ Search.module.scss

```jsx
import { FaSearch } from 'react-icons/fa';
<div className='search'>
  <span className='search__icon'>
    <FaSearch />
  </span>
  <input type='text' className='search__input' placeholder='search' />
</div>;
```

```scss
// import global.scss
.search {
  position: relative;
  border-radius: 4px;

  // magnify-icon
  &__icon {
    // position
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);

    // decorate
    font-size: 1.6rem;
    font-weight: 200;
    color: grey;

    // control-child
    display: flex;
  }

  &__input {
    width: 100%;
    padding: 5px;
    padding-left: 30px;
    border-radius: 5px;
    border: 1px solid $grey-light;
    font-size: 1.6rem;
    outline: none;
    color: $grey-dark;
  }
}
```

# 5.2 : SideBar

#### 5.2.1 : สร้าง Sidebar

- สร้างไฟล์ Sidebar.jsx

```jsx
<aside className='sidebar'>
  <section className='sidebar_category'>{/* for generic list*/}</section>
  <section className='sidebar_category'>{/* for project list*/}</section>
</aside>
```

```scss
.sidebar {
  position: sticky;

  // control-child
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 30px;
}
```

#### 5.2.2 : Generic List

- children แรก ของ .sidebar_category

```jsx
<ul className='list'>
  <li className='list__item'>
    <span className='list__icon'>
      <FaInbox />
    </span>
    <h6 className='list__text'>Inbox</h6>
  </li>
  <li className='list__item'>
    <span className='list__title'>
      <FaCalendar />
    </span>
    <h6 className='list__title'>Today</h6>
  </li>
  <li className='list__item'>
    <span className='list__icon'>
      <FaCalendarAlt />
    </span>
    <h6 className='list__title'>Next 7 Days</h6>
  </li>
</ul>
```

```scss
// overide ใน global
li {
  list-style: none;
}

// ใน module.scss

.list {
  display: flex;
  flex-direction: column;
  gap: 5px;

  &__item {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 20px;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;

    &:hover {
      background-color: $grey-dark;
    }
  }

  &__icon {
    display: flex;
  }

  &__title {
    font-weight: 500;
  }
}
```

- Challenge-1 : Refactor `<li></li>` เป็น ListItem Component

```jsx
// Before Refator
<li className='list__item'>
    <span className='list__icon'>
        <FaInbox />
    </span>
    <h6 className='list__text'>Inbox</h6>
</li>

// After Refactor
<ListItem  /> // with some props
```

- Challenge-2 : Refactor `<ul></ul>` เป็น Lists Component

```jsx
// Before Refactor
<ul className='list'>
    <ListItem  /> // with some props
    <ListItem  /> // with some props
    <ListItem  /> // with some props
</ul>

// After Refactor (Sol A)
<Lists /> // with some props

// After Refactor (Sol B)
<Lists>
    <ListItem  /> // with some props
    <ListItem  /> // with some props
    <ListItem  /> // with some props
</Lists>
```

#### 5.2.3 : Project List

- children ที่สอง ของ .sidebar_category

```jsx
<div className='accordion'>
  <div className='accordion__header'>
    <span className='accordion__header__icon'>
      <FaChevronDown />
    </span>
    <h6 className='accordion__header__title'>Projects</h6>
  </div>
  <div className='accordion__content'>
    <ul className='list'>
      <li className='list__item'>
        <span className='list__icon'>
          <FaInbox />
        </span>
        <h6 className='list__title'>Project-A</h6>
      </li>
      <li className='list__item'>
        <span className='list__icon'>
          <FaInbox />
        </span>
        <h6 className='list__title'>Project-B</h6>
      </li>
    </ul>
  </div>
</div>
```

```scss
.accordion {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__header {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;

    &__icon {
      display: flex;
    }
    &__title {
      font-size: 1rem;
    }
  }

  &__content {
    // using css of lists
  }
}
```

- challenge : refactor to `<Accordion/>`
- Tip : Reuse <Lists /> component

# 6 : TodoContent

- สร้างไฟล์ TodoContent

```jsx
<main className={styles.todo__container}>
  {/* for Header */}
  {/* for Create */}
  {/* for Lists */}
</main>
```

```scss
.todo_container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

# 7 : Todo-header

- สร้างไฟล์ TodoHeader.jsx
- เพิ่ม markup และ implement css module
- นำ TodoHeader ไป render ใน TodoContent

```js
export function TodoHeader() {
  let today = new Date();
  let options = { weekday: 'short', day: 'numeric', month: 'short' };

  return (
    <div className={styles.header}>
      <h1 className={styles.header__text}>Inbox</h1>
      <span className={styles.header__date}>{today.toLocaleDateString('en-US', options)}</span>
    </div>
  );
}
```

```scss
.header {
  display: flex;
  gap: 10px;
  align-items: baseline;

  &__text {
    font-size: 2.4rem;
  }
  &__date {
    font-size: 1.2rem;
    color: $grey-dark;
  }
}
```

# 8 : CreateTodo

```js
<div className='create__todo'>
  <span className='create__todo__icon'>+</span>
  <h3 className='create__todo__text'>Add task</h3>
</div>
```

```scss
.create__todo {
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  padding: 10px;

  &__icon {
    font-size: 2.4rem;
    line-height: 2.2rem;
    text-align: center;
    border-radius: 50%;
    width: 24px;
    height: 24px;

    &:hover {
      background-color: $primary;
      color: white;
    }
  }

  &__text {
    color: grey;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.2rem;

    &:hover {
      color: $primary;
    }
  }
}
```

# 9 : TodoForm

```js
<form className='todo__form__container'>
  <input className='todo__form__input' placeholder='Task Name' />
  <div className='todo__form__footer'>
    <p className='todo__error'>Title is required</p>
    <div className='todo__form__buttons'>
      <button>Cancel</button>
      <button>Add Task</button>
    </div>
  </div>
</form>
```

```scss
.todo__form__container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap: 10px;
  border: 1px solid $grey-light;
}

.todo__form__input {
  border: none;
  border-radius: 4px;
  padding: 10px 10px;
  width: 100%;
  font-size: 1.4rem;

  &:focus {
    outline: none;
  }
}

.todo__form__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo__error {
  justify-self: start;
  padding: 10px;
  font-size: 10px;
  font-weight: 800;
  color: $primary;
}
.todo__form__buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  flex: 1;

  & > button {
    border: none;
    padding: 8px;
    border-radius: 3px;
    cursor: pointer;
  }

  & > button:last-child {
    background-color: $primary;
    color: $white;
  }
}
```

# 10 : Condition Render CreateTodo with TodoForm

# WARNING : AFTER THIS STEP, PLS STICK WITH INSTRUCTOR

# 11 : TodoItem

```js
<li className='todo'>
  <div className='todo__checkbox'>
    <HiCheck className='todo__checkbox__icon' />
  </div>
  <p className='todo__task done'>item-1</p>

  <div className='todo_edit'>
    <HiPencil className='todo_edit__icon' />
  </div>

  <div className='todo_delete'>
    <HiTrash className='todo_delete__icon' />
  </div>
</li>
```

```scss
.todo {
  cursor: pointer;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;

  &:hover {
    background-color: $grey-light;
  }

  &__checkbox {
    color: $grey-dark;
    height: 16px;
    width: 16px;
    display: block;
    border: 1px solid $grey-dark;
    border-radius: 16px;
    text-align: center;
    line-height: 16px;

    &__icon {
      display: none;
      font-size: 1.2rem;
    }

    &__icon__done {
      display: inline;
      font-size: 12px;
    }
  }

  &__task {
    flex: 1;
  }

  &__edit,
  &__delete {
    color: gray;
    display: flex;
    align-items: center;
    font-size: 1.9rem;

    &:hover {
      color: $grey-dark;
    }
  }
}

.done {
  text-decoration: line-through;
}

// effect ติ้กถูกตอน hover ที่ <li>
// .checkbox__container:hover {
//     .checkbox__icon {
//         display: inline;
//     }
// }
```

# 12 : เอา TodoForm ไป toggle กับ TodoCreate

<!--
# 13 Refractor เป็น JSX Component, SCSS Module

```js
// TodoContent.jsx
import { TodoHeader } from './TodoHeader';
import { TodoCreate } from './TodoCreate';
import { TodoLists } from './TodoLists';

export function TodoContent() {
    return (
        <main className='content'>
            <TodoHeader />
            <TodoCreate />
            <TodoLists />
        </main>
    );
}
```

```js
// AddTodo.jsx
import { useState } from 'react';
import styles from './AddTodo.module.scss';
import { TodoForm } from './TodoForm';
export function AddTodo() {
    const [addMode, setAddMode] = useState(false);
    const [newTodo, setNewTodo] = useState('');

    const handleClickAdd = () => setAddMode(true);
    const handleClickCancel = () => {
        // setNewTodo('')
        setAddMode(false);
    };
    const handleClickAddTodo = (e) => {
        e.preventDefault();
        setAddMode(false);
    };

    const handleChangeTodo = (e) => {
        setNewTodo(e.target.value);
    };

    return (
        <div className={styles.container}>
            {!addMode ? (
                <div className={styles.add__todo} onClick={handleClickAdd}>
                    <span>+</span>
                    <h3>Add task</h3>
                </div>
            ) : (
                <TodoForm
                    task={newTodo}
                    textConfirm='Add task'
                    onChange={handleChangeTodo}
                    onclickConfirm={handleClickAddTodo}
                    onClickCancel={handleClickCancel}
                />
            )}
        </div>
    );
}
```

```js
// TodoForm.jsx
import styles from './TodoForm.module.scss';

export function TodoForm({ task, onChange, textConfirm, onclickConfirm, onClickCancel }) {
    return (
        <form className={styles.todo__form__container}>
            <input
                className={styles.todo__form__input}
                placeholder='Task Name'
                value={task}
                onChange={onChange}
            />
            <div className={styles.todo__form__buttons}>
                <button onClick={onClickCancel}>Cancel</button>
                <button onClick={onclickConfirm}>{textConfirm}</button>
            </div>
        </form>
    );
}
``` -->

# 13 : ทำ TodoList

```js
// TodoLists.jsx
import styles from './TodoLists.module.scss';
import mockTodo from '../../data/todo.json';
import { TodoItem } from './TodoItem';

export function TodoLists() {
  return (
    <ul className={styles.todoList}>
      {mockTodo.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
```

```js
// TodoItem
import styles from './TodoItem.module.scss';

import { useState } from 'react';
import { TodoForm } from './TodoForm';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';

export function TodoItem({ item }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleClickEdit = () => setIsEdit(true);
  const onClickConfirm = () => {
    setIsEdit(false);
  };
  const onClickCancel = () => {
    setIsEdit(false);
  };

  return (
    <>
      {!isEdit ? (
        <li className={styles.todo__item__container} key={item.id}>
          <div className={styles.checkbox__container}>
            <HiCheck
              className={`${item.status ? styles.checkbox__icon__done : styles.checkbox__icon}`}
            />
          </div>
          <p className={`${item.status && styles.done}`}>{item.task}</p>

          <div className={styles.edit__icon} onClick={handleClickEdit}>
            <HiPencil />
          </div>

          <div className={styles.delete__icon}>
            <HiTrash />
          </div>
        </li>
      ) : (
        <TodoForm
          task={item.task}
          textConfirm='Edit task'
          onclickConfirm={onClickConfirm}
          onClickCancel={onClickCancel}
        />
      )}
    </>
  );
}
```

# 14.Button

```js
import styles from './Button.module.scss';

export function Button({ text, active = true }) {
  let btnStyles = active ? styles.btn__primary : styles.btn__secondary;
  return <button className={`${styles.btn} ${btnStyles}`}>{text}</button>;
}
```

```css
.btn {
  border: none;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;
  flex: 1;

  &__primary {
    background-color: $primary;
    color: white;
  }

  &__secondary {
    background-color: $grey-light;
    color: black;
  }
}
```
