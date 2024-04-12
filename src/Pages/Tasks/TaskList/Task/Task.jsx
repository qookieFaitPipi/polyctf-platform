import React from 'react';
import styles from './Task.module.scss';

// images
import task_compl from './../../../../Assets/images/icons/task_comp.svg';

const Task = ({id, name, solved}) => {
  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <div className={styles.title}>
          {name}
        </div>
        <img src={solved ? task_compl : ' '} alt="" />
      </div>
    </div>
  )
}

export default React.memo(Task);