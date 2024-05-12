import React from 'react';
import styles from './Task.module.scss';

// images
import task_compl from './../../Assets/images/icons/task_comp.svg'

// redux
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectTaskId } from '../../Redux/slices/TaskSlice';

const Task = ({id, name, solved}) => {
  const dispatch = useDispatch()
  const { selectedTaskId } = useSelector((state) => state.TaskSlice);

  return (
    <div className={selectedTaskId === id ? styles.active : solved ? styles.solved : styles.task} onClick={() => {dispatch(selectTaskId(id))}}>
      <div className={styles.content}>
        <div className={styles.title}>
          {name}
        </div>
        <img src={solved ? task_compl : task_compl} alt="" />
      </div>
    </div>
  )
}

export default React.memo(Task);