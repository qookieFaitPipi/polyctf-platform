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
      axios.post('http://polyctf.alexavr.ru/api/get_task', userData, config).then((res) => {
        dispatch(selectTask(res.data))
      });
    } catch(err) {
      console.log(err);
    }
  }, [selectedTaskId])

  return (
    <div className={styles.taskInfo}>
      <div className={styles.content}>
        <div className={styles.description}>
          <Task id={selectedTaskId} name={selectedTask.task_name} />
          <div className={styles.taskTitle}>Описание:</div>
          <div className={styles.taskText}>{selectedTask.task_description}</div>
          <div className={styles.taskTitle}>Уровень сложности:</div>
          <div className={styles.taskText}>{selectedTask.task_level}</div>
          <div className={styles.taskTitle}>Ссылки на внешние ресурсы:</div>
          <div className={styles.taskText}>https://youtu.be/xm3YgoEiEDc?si=ZeJrpjMbBkiXka7x</div>
        </div>
          
        <div className={styles.statisics}>
          <div className={styles.statBlock}>
            <div className={styles.title}>Выполнили</div>
            <div className={styles.hr}>{selectedTask.task_count_done}</div>
            <div className={styles.text}>раз</div>
          </div>

          <div className={styles.statBlock}>
            <div className={styles.title}>Первая кровь</div>
            <div className={styles.hr}>{selectedTask.task_first_blood_name}</div>
            <div className={styles.text}>33/09/2054</div> 
          </div>

          <div className={styles.statBlock}>
            <div className={styles.title}>Награда</div>
            <div className={styles.hr}>{selectedTask.task_count_points}</div>
            <div className={styles.text}>баллов</div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(TaskInfo);