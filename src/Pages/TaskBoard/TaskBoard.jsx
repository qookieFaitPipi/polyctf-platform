import React, { useEffect, useState } from 'react';
import styles from './TaskBoard.module.scss';

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

const TaskBoard = () => {
  const { selectedTaskId } = useSelector((state) => state.TaskSlice);

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
      <div className={styles.list}>
        {selectedTaskId ? <TaskInfo /> : ''}
        <TaskList 
          tasks={tasks}
        />
      </div>
    </section>
  )
}

export default React.memo(TaskBoard);