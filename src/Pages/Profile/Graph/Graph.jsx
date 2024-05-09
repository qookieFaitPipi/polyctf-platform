import React from 'react';
import styles from './Graph.module.scss';

// images
import raitLeft from './../../../Assets/images/icons/rait_left.svg';
import raitRight from './../../../Assets/images/icons/rait_right.svg';
 
// components
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const Graph = ({categories, sumPoints, placeInRating, countSolvedTasks, userCountFirstBlood}) => {
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
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(155, 59, 14, 0.6)',
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

  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className={styles.graph}>
      <div className={styles.content}>
        <div className={styles.top}>
          <Pie data={data} options={options}/>
        </div>
        <div className={styles.bottom}>
          <div className={styles.row1}>
            <div className={styles.statBlock}>
              <div className={styles.colored}>{sumPoints}</div>
              <div className={styles.text}>SCORE</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.text}>FIRST BLOOD</div>
              <div className={styles.colored}>{userCountFirstBlood}</div>
            </div>
          </div>
          <div className={styles.row2}>
            <img src={raitLeft} style={{marginLeft: '35px'}} alt="" />
            <div className={styles.statBlock}>
              <div className={styles.colored}>{placeInRating}</div>
              <div className={styles.text}>PLACE</div>
            </div>
            <img src={raitRight} style={{marginRight: '35px'}} alt="" />
          </div>
          <div className={styles.row3}>
            <div className={styles.statBlock}>
              <div className={styles.colored}>{countSolvedTasks}</div>
              <div className={styles.text}>TASKS SOLVED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Graph);