import React, { useEffect, useState } from 'react';
import styles from './ProgressList.module.scss';

// axios
import axios from 'axios';

// components
import ProgressPoint from './ProgressPoint/ProgressPoint';

// hooks
import { getCookie } from '../../../../Hooks/getCookie';

const ProgressList = () => {
  const [progressList, setProgressList] = useState([]);

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
    try {
      axios.get("https://polyctf.alexavr.ru/api/get_progress", config).then((res) => {
        setProgressList(res.data);
      })
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={styles.progressList}>
      <div className={styles.content}>
        <div className={styles.title}>Ваш прогресс</div>
        <div className={styles.list}>
          {progressList.map((obj) => {
            return <ProgressPoint 
              key={obj.category_id}
              name={obj.category_name}
              progress={obj.progress}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default React.memo(ProgressList);