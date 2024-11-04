import React, {useEffect} from 'react';
import styles from './TaskInfo.module.scss';

// axios
import axios from 'axios';

// react-router-dom
import { useParams } from 'react-router-dom';

// redux
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectTask } from '../../../Redux/slices/TaskSlice';

// hooks
import { getCookie } from '../../../Hooks/getCookie';

// components
import Task from '../../../Components/Task/Task';
import { Link } from 'react-router-dom';

const TaskInfo = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { selectedTaskId, selectedTask } = useSelector((state) => state.TaskSlice);

  useEffect(() => {
    if(!params.id || !params.id) {
      return;
    }
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
    const userData = {
      task_id: params.id
    }
    try {
      axios.post('https://backend.polyctf.ru/api/get_task', userData, config).then((res) => {
        dispatch(selectTask(res.data));
      });
    } catch(err) {
      console.log(err);
    }
  }, [dispatch, params.id])


  const parseAuthors = (authorString) => {
    const authorArray = authorString.split(';');
    return authorArray.map((author) => {
      const regex = /\[@([^\]]+)\]\((https?:\/\/[^\)]+)\)/;
      const match = author.match(regex);
      if (match) {
        return {
          name: match[1],
          link: match[2],
        };
      }
      return null;
    }).filter(Boolean);
  };

  const authors = parseAuthors(selectedTask.task_author || '');

  return (
    <div className={styles.taskInfo}>
      <div className={styles.content}>
        <div className={styles.description}>
          <Task id={params.id} name={selectedTask.task_name} solved={selectedTask.is_solved} />
          <div className={styles.taskTitle}>DESCRIPTION</div>
          <div  className={styles.taskDescription}>{selectedTask.task_description}</div>
          <div className={styles.taskTitle}>DEGREE OF DIFFICULTY</div>
          <div className={styles.taskText}>{selectedTask.task_level}</div>
          <div className={styles.taskTitle}>LINK</div>

          <Link 
            className={styles.taskText} 
            to={selectedTask?.task_link && selectedTask.task_link.includes("nc") ? '#' : selectedTask?.task_link}
            target={selectedTask?.task_link && selectedTask.task_link.includes("nc") ? undefined : '_blank'}
          >
            {selectedTask?.task_link && selectedTask.task_link.includes("nc") ? selectedTask.task_link : 'Ссылка'}
          </Link>

          <div className={styles.taskTitle}>AUTHOR</div>
           {authors.length > 0 ? (
              authors.map((author, index) => (
                <Link to={author.link} className={styles.taskText} style={{paddingBottom: '10px'}} key={index}>
                  @{author.name}
                </Link>
              ))
            ) : (
              'Unknown'
            )}
          <div className={styles.taskTitle}></div>
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
            <div className={styles.text}>{selectedTask.first_blood_datetime ? selectedTask.first_blood_datetime : 'XX.XX.XXXX'}</div>
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