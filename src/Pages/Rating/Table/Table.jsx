import React, { useState } from 'react';
import styles from './Table.module.scss';

// components
import Point from './Point/Point';

const Table = ({points}) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.table}>
      <div className={styles.content}>
        <div className={styles.top}>
          <input className={styles.search} onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder='Поиск по логину' type="text" />
        </div>
        <div className={styles.field}>
          <div className={styles.top}>
            <div className={styles.title}>МЕСТО</div>
            <div className={styles.title}>РЕШЕНО ЗАДАНИЙ</div>
            <div className={styles.title}>ЛОГИН</div>
            <div className={styles.title}>БАЛЛЫ</div>
          </div>
          <div className={styles.list}>
            {points.filter((item) => item.user_name.toLowerCase().includes(searchValue.toLowerCase())).map((obj) => {
              return <Point 
                key={obj.user_name}
                name={obj.user_name} 
                place={obj.user_place} 
                sumPoints={obj.user_sum_points} 
                countSolvedTasks={obj.user_count_solved_tasks} 
              />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Table);