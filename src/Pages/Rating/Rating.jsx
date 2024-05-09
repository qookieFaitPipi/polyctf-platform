import React, {useEffect, useState} from 'react';
import styles from './Rating.module.scss';

// axios
import axios from 'axios';

// hooks
import { getCookie } from '../../Hooks/getCookie';

// components
import Point from './Point/Point';

// images
import vector from './../../Assets/images/background/ratingVector.svg';


const Rating = () => {
  const [points, setPoints] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
    
    try {
      axios.get("https://hosting.alexavr.ru/api/get_rating", config).then((res) => {
        setPoints(res.data);
      })
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={styles.table}>
      <div className={styles.content} style={{backgroundImage: `url(${vector})`}}>
        <div className={styles.top}>
          <input className={styles.search} onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder='Search for login' type="text" />
        </div>
        <div className={styles.field}>
          <div className={styles.top}>
            <div className={styles.title}>PLACE</div>
            <div className={styles.title}>TASKS SOLVED</div>
            <div className={styles.title}>USERNAME</div>
            <div className={styles.title}>SCORE</div>
          </div>
          <div className={styles.list}>
            {points.filter((item) => item.user_name.toLowerCase().includes(searchValue.toLowerCase())).map((obj) => {
              return <Point 
                key={obj.user_name}
                name={obj.user_name} 
                place={obj.user_place} 
                sumPoints={obj.user_sum_points} 
                countSolvedTasks={obj.user_count_solved_tasks} 
              />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Rating);