import React, { useEffect } from 'react';
import styles from './Task.module.scss';

import axios from 'axios';

// hooks
import { getCookie } from '../../Hooks/getCookie';

// react-router-dom
import { useNavigate, useParams } from 'react-router-dom';

// images
import task_notdone from './../../Assets/images/icons/task_notdone.svg'
import task_done from './../../Assets/images/icons/task_done.svg'

// redux
import { useDispatch } from 'react-redux';
import { selectTaskId } from '../../Redux/slices/TaskSlice';

const Task = ({id, name, solved}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const userSelectTask = () => {
    dispatch(selectTaskId(id));
    navigate(`/categories/${params.name}/${id}`);
  }

  return (
    <div className={params.id == id ? styles.active : solved ? styles.solved : styles.task} onClick={userSelectTask}>
      <div className={styles.content}>
        <div className={styles.title}>
          {name}
        </div>
        <img src={solved ? task_done : task_notdone} alt="" />
      </div>
    </div>
  )
}

export default React.memo(Task);