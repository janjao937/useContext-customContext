import styles from './SideBar.module.scss';
import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import Lists from './Lists';

function SideBar() {
  const generalLists = [
    { id: 1, text: 'Inbox', icon: <FaInbox />, active: true },
    { id: 2, text: 'Today', icon: <FaCalendar />, active: false },
    { id: 3, text: 'Next 7 Days', icon: <FaCalendarAlt />, active: false },
  ];

  const projectLists = [
    { id: 4, text: 'Project-A', icon: <FaInbox />, active: false },
    { id: 5, text: 'Project-B', icon: <FaInbox />, active: false },
  ];
  return (
    <aside className={styles.sidebar}>
      <section className={styles.sidebar__category}>
        <Lists data={generalLists} />
      </section>

      <section className={styles.sidebar__category}>
        {/* Accordion */}
        <div className={styles.accordion}>
          {/* 1-Toggle */}
          <div className={styles.accordion__toggle}>
            <li className={styles.accordion__item}>
              <FaChevronDown
                className={`${styles.accordion__item__icon} ${styles.accordion__item__active}'`}
              />
              <p className={styles.accordion__item__text}>Projects</p>
            </li>
          </div>
          {/* 2-List */}
          <Lists data={projectLists} />
        </div>
      </section>
    </aside>
  );
}

export default SideBar;

/* 
Challenge-1 : Refactor ให้ 2 section render UI ที่...
  - OptionA (2/5) : render UI ต่างกัน <Lists/> กับ <Accordion /> 
  - OptionB (4/5) : render UI เดียวกัน เช่น <Lists />
  - OptionC (5/5) : render UI <Lists/> ภายใต้ <Accordion> <Lists/> </Accordion> 
  // ใช้ props.children
*/

/* 
 <ul className='list'>
  // #1
    {projectLists.map((obj) => (
      <ListItem key={obj.id} text={obj.text} icon={obj.icon} active={obj.active} />
    ))} 

    // #2
    {projectLists.map((obj) => {
      obj.key = obj.id;
      delete obj.id;
      return <ListItem {...obj} />;
    })}
</ul>
*/
