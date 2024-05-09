import React from 'react';
import styles from './ProgressList.module.scss';

// components
import ProgressPoint from './ProgressPoint/ProgressPoint';

const ProgressList = ({progressList}) => {
  return (
    <div className={styles.progressList}>
      <div className={styles.content}>
        <div className={styles.title}>Ваш прогресс</div>
        <div className={styles.list}>
          {progressList.map((obj) => {
            return <ProgressPoint 
              key={obj.category_id}
              name={obj.category_name}
              progress={obj.progress}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default React.memo(ProgressList);