import { FaSearch } from 'react-icons/fa';
import { useState,useEffect } from 'react';
import styles from './Search.module.scss';
import useTodo from '../../../hooks/useTodo';

function Search() {
  const [searchKeyword,setSearchKeyword] = useState("");
  const {searchTodo} = useTodo();
  useEffect(()=>{
   let timeOutId = setTimeout(()=> { if (searchKeyword.trim() !== '') searchTodo(searchKeyword)},1000);
    console.log("search");
   return ()=>{
    clearTimeout(timeOutId);
   }
  },[searchKeyword]);

  const handleChangeInput =(e)=>{
    // console.log(e.target.value)
    setSearchKeyword(e.target.value);
    // searchTodo(e.target.value);
  }
  return (
    <div className={styles.search}>
      <span className={styles.search__icon}>
        <FaSearch />
      </span>
      <input value={searchKeyword} onChange={handleChangeInput} type='text' placeholder='search' className={styles.search__input} />
    </div>
  );
}

export default Search;
