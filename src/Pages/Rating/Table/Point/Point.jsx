import React from 'react';
import styles from './Point.module.scss';

const Point = ({name, place, sumPoints, countSolvedTasks}) => {
  return (
    <>
      <div className={styles.point}>
        <div className={styles.content}>
          <div className={styles.text}>{place}</div>
          <div className={styles.text}>{countSolvedTasks}</div>
          <div className={styles.text}>{name}</div>
          <div className={styles.text}>{sumPoints}</div>
        </div>
      </div>
      <hr style={{backgroundColor: '#111', width: '100%'}}/>
    </>
  )
}

export default React.memo(Point);