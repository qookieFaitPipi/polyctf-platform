import React, { useEffect, useState } from 'react';
import styles from './TaskBoard.module.scss';

// axios
import axios from 'axios';

// react-transition-group
import { CSSTransition } from 'react-transition-group';

// react-router-dom
import { useParams, Link } from "react-router-dom";

// hooks
import { getCookie } from '../../Hooks/getCookie';

// components
import TaskInfo from './TaskInfo/TaskInfo';
import TaskList from './TaskList/TaskList';

// redux
import { useDispatch, useSelector } from 'react-redux';

// images
import arrow from './../../Assets/images/icons/arrow.svg';
import categoryBack from './../../Assets/images/background/categoryBack.svg';
import { setUpdateState } from '../../Redux/slices/UpdateSlice';

const TaskBoard = () => {
  const { updateState } = useSelector((state) => state.UpdateSlice);

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
      axios.post('https://backend.polyctf.ru/api/get_tasks', userData, config).then((res) => {
        setTasks(res.data);
        dispatch(setUpdateState(false));
      });
    } catch(err) {
      console.log(err);
    }

  }, [params, updateState]);

  
  return ( 
    <section className={styles.taskBoard}>
      <div className={styles.list} style={{backgroundImage: `url(${categoryBack})`}}>
        <div className={styles.title}>
          <Link to='/categories' style={{fontSize: '20px', textDecoration: 'none', color: '#fff'}}>{params.name.toUpperCase()}</Link>
          <img className={styles.arrow} src={arrow} alt="" /><div style={{textDecoration: 'underline', marginLeft: '10px', fontSize: '20px', fontWeight: 500}}>TASKS</div>
        </div>
        <div className={styles.content}>
          <CSSTransition in={params.id ? true : false} classNames='alert' timeout={400} unmountOnExit><TaskInfo /></CSSTransition>
          <TaskList
            tasks={tasks}
          />
        </div>
      </div>
    </section>
  )
}

export default React.memo(TaskBoard);