import React, {useState, useEffect} from 'react';
import styles from './Liveboard.module.scss';

// axios
import axios from 'axios';

// components
import Point from '../../Components/Point/Point';

// images
import vector from './../../Assets/images/background/ratingVector.svg';

const Liveboard = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {    
    const fetchData = async () => {
      try {
        const res = await axios.get("https://backend.polyctf.ru/api/get_liveboard");
        setPoints(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.liveboard}> 
      <div className={styles.content} style={{backgroundImage: `url(${vector})`}}>
        <div className={styles.field}>
          <div className={styles.top}>
            <div className={styles.title}>PLACE</div>
            <div className={styles.title}>USERNAME</div>
            <div className={styles.title}>TASKS SOLVED</div>
            <div className={styles.title}>SCORE</div>
          </div>
          <div className={styles.list}>
            {points.map((obj) => {
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
    </section>
  )
}

export default Liveboard
