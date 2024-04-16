import React, { useState } from 'react';
import styles from './Table.module.scss';

// components
import Point from './Point/Point';

// images
import ratingBack from './../../../Assets/images/background/ratingBack.svg';

const Table = ({points}) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.table}>
      <div className={styles.content} style={{backgroundImage: `url(${ratingBack})`}}>
        <div className={styles.top}>
          <input className={styles.search} onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder='Search for login' type="text" />
        </div>
        <div className={styles.field}>
          <div className={styles.top}>
            <div className={styles.title}>PLACE</div>
            <div className={styles.title}>COUNT TASKS</div>
            <div className={styles.title}>USERNAME</div>
            <div className={styles.title}>SCORE</div>
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