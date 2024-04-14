import React from 'react';
import styles from './TaskList.module.scss';

// components
import Task from '../../../Components/Task/Task';

const TaskList = ({tasks}) => {
  return (
    <div className={styles.taskList}>
      <div className={styles.content}>
        <div className={styles.taskRouter}>
          {tasks.map((obj) => {
            return <Task 
              key={obj.task_id}
              id={obj.task_id}
              name={obj.task_name}
              solved={obj.task_solved}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default React.memo(TaskList);