import React from 'react';
import styles from './TaskList.module.scss';

// redux
import { useSelector } from 'react-redux';

// components
import Task from '../../../Components/Task/Task';

const TaskList = ({tasks}) => {
  const { selectedTaskId } = useSelector((state) => state.TaskSlice);

  return (
    <div className={styles.taskList}>
      <div className={styles.content}>
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
  )
}

export default React.memo(TaskList);