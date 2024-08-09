import React, {useEffect} from 'react';
import styles from './TaskInfo.module.scss';

// axios
import axios from 'axios';

// redux
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectTask } from '../../../Redux/slices/TaskSlice';

// hooks
import { getCookie } from '../../../Hooks/getCookie';

// components
import Task from '../../../Components/Task/Task';

const TaskInfo = () => {
  const dispatch = useDispatch()
  const { selectedTaskId, selectedTask } = useSelector((state) => state.TaskSlice);

  useEffect(() => {
    if(!selectedTaskId || !selectedTask) {
      return;
    }
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
    const userData = {
      task_id: selectedTaskId
    }
    try {
      axios.post('https://backend.polyctf.ru/api/get_task', userData, config).then((res) => {
        dispatch(selectTask(res.data));
      });
    } catch(err) {
      console.log(err);
    }
  }, [dispatch, selectedTaskId])

  return (
    <div className={styles.taskInfo}>
      <div className={styles.content}>
        <div className={styles.description}>
          <Task id={selectedTaskId} name={selectedTask.task_name} />
          <div className={styles.taskTitle}>DESCRIPTION</div>
          <div  className={styles.taskText}>{selectedTask.task_description}</div>
          <div className={styles.taskTitle}>DEGREE OF DEFFICULTY</div>
          <div className={styles.taskText}>{selectedTask.task_level}</div>
          <div className={styles.taskTitle}>LINK</div>
          <div className={styles.taskText}>{selectedTask.task_link}</div>
          <div className={styles.taskTitle}>AUTHOR</div>
          <div className={styles.taskText}>{selectedTask.task_author}</div>
        </div>
          
        <div className={styles.statisics}>
          <div className={styles.statBlock}>
            <div className={styles.title}>COMPLETED</div>
            <div className={styles.hr}>{selectedTask.task_count_done}</div>
            <div className={styles.text}>times</div>
          </div>

          <div className={styles.statBlock} style={{width: '35%'}}>
            <div className={styles.title}>FIRST BLOOD</div>
            <div className={styles.hr}>{selectedTask.task_first_blood_name ? selectedTask.task_first_blood_name : 'None'}</div>
            <div className={styles.text}>{selectedTask.first_blood_datetime}</div> 
          </div>

          <div className={styles.statBlock}>
            <div className={styles.title}>AWARD</div>
            <div className={styles.hr}>{selectedTask.task_count_points}</div>
            <div className={styles.text}>points</div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(TaskInfo);