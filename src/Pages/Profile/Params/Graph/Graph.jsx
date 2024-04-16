import React, { useState , useEffect} from 'react';
import styles from './Graph.module.scss';

// axios
import axios from 'axios';

// images
import raitLeft from './../../../../Assets/images/icons/rait_left.svg';
import raitRight from './../../../../Assets/images/icons/rait_right.svg';
import raitTasks from './../../../../Assets/images/icons/rait_tasks.svg';

// hooks
import { getCookie } from './../../../../Hooks/getCookie';
 
// components
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const Graph = ({sumPoints, placeInRating, countSolvedTasks, userCountFirstBlood}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
    try {
      axios.get("http://polyctf.alexavr.ru/api/get_categories", config).then((res) => {
        setCategories(res.data);
      })
    } catch (err) {
      console.log(err);
    }
  }, []);

  const namesArray = []
  const datasArray = []

  categories.map(category => {
    if(category.category_solved_tasks > 0) {
      namesArray.push(category.category_name);
    }
  });

  categories.map(category => {
    datasArray.push(category.category_solved_tasks);
  });

  const data = {
  
    labels: namesArray,
    datasets: [
      {
        label: '# of Votes',
        data: datasArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(155, 59, 14, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.graph}>
      <div className={styles.content}>
        <div className={styles.top}>
          <Pie data={data} />
        </div>
        <div className={styles.bottom}>
          <div className={styles.row1}>
            <div className={styles.statBlock}>
              <div className={styles.colored}>{sumPoints}</div>
              <div className={styles.text}>Набрано баллов</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.text}>Первая кровь</div>
              <div className={styles.colored}>{userCountFirstBlood}</div>
            </div>
          </div>
          <div className={styles.row2}>
            <img src={raitLeft} alt="" />
            <div className={styles.statBlock}>
              <div className={styles.colored}>{placeInRating}</div>
              <div className={styles.text}>Место в рейтинге</div>
            </div>
            <img src={raitRight} alt="" />
          </div>
          <div className={styles.row3}>
            <img src={raitTasks} alt="" />
            <div className={styles.statBlock}>
              <div className={styles.colored}>{countSolvedTasks}</div>
              <div className={styles.text}>Заданий выполнено</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Graph);