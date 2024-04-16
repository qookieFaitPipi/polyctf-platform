import React, { useEffect, useState } from 'react';
import styles from './TaskBoard.module.scss';

// react-transition-group
import { CSSTransition } from 'react-transition-group';

// axios
import axios from 'axios';

// react-router-dom
import { useParams } from "react-router-dom";

// hooks
import { getCookie } from '../../Hooks/getCookie';

// components
import MHeader from '../../Components/MHeader/MHeader';
import Invisible from '../../Components/Invisible/Invisible';
import TaskInfo from './TaskInfo/TaskInfo';
import TaskList from './TaskList/TaskList';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// images
import arrow from './../../Assets/images/icons/arrow.svg';
import categoryBack from './../../Assets/images/background/categoryBack.svg';

const TaskBoard = () => {
  const { selectedTaskId, selectedTask } = useSelector((state) => state.TaskSlice);
  const dispatch = useDispatch();

  const [tasks, setTasks] = useState([]);
  const params = useParams();

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
    const userData = {
      category_name: params.name
    }
    try {
      axios.post('http://polyctf.alexavr.ru/api/get_tasks', userData, config).then((res) => {
        setTasks(res.data);
      });
    } catch(err) {
      console.log(err);
    }

  }, []);

  
  return ( 
    <section className={styles.taskBoard}>
      <MHeader />
      <Invisible />
      <div className={styles.list} style={{backgroundImage: `url(${categoryBack})`}}>
        <div className={styles.title}>
          <div style={{fontSize: '20px'}}>{params.name.toUpperCase()}</div><img className={styles.arrow} src={arrow} alt="" /><div style={{textDecoration: 'underline', marginLeft: '10px', fontSize: '20px', fontWeight: 500}}>TASKS</div>
        </div>
        <div className={styles.content}>
          <CSSTransition in={selectedTaskId ? true : false} classNames='alert' timeout={400} unmountOnExit><TaskInfo /></CSSTransition>
          <TaskList
            tasks={tasks}
          />
        </div>
      </div>
    </section>
  )
}

export default React.memo(TaskBoard);