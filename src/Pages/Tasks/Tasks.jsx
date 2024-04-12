import React, { useEffect, useState } from 'react';

// axios
import axios from 'axios';

// react-router-dom
import { useParams } from "react-router-dom";

// hooks
import { getCookie } from '../../Hooks/getCookie';

// components
import MHeader from '../../Components/MHeader/MHeader';
import Invisible from '../../Components/Invisible/Invisible';
import TaskList from './TaskList/TaskList';

const Tasks = () => {
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
      category_id: params.name
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
    <section>
      <MHeader />
      <Invisible />
      <TaskList 
        tasks={tasks}
      />
    </section>
  )
}

export default React.memo(Tasks);