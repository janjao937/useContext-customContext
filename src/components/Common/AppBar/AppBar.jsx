import styles from './AppBar.module.scss';
import { FaHome } from 'react-icons/fa';
import SearchBar from '../Search/Search';

function AppBar() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <FaHome />
      </div>
      <div className={styles.header__text}>
        <h1>TodoList</h1>
      </div>
      <div className={styles.header__search}>
        <SearchBar />
      </div>
    </header>
  );
}

export default AppBar;
