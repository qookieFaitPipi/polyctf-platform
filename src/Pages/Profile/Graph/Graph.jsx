import React from 'react';
import styles from './Graph.module.scss';

// images
import raitLeft from './../../../Assets/images/icons/rait_left.svg';
import raitRight from './../../../Assets/images/icons/rait_right.svg';
 
// components
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const Graph = ({progressList, sumPoints, placeInRating, countSolvedTasks, userCountFirstBlood}) => {
  const namesArray = []
  const datasArray = []

  progressList.map(progressList => {
    if(progressList.category_solved_tasks > 0) {
      namesArray.push(progressList.category_name);
    }
    datasArray.push(progressList.category_solved_tasks);
  });

  const data = {
    labels: namesArray,
    datasets: [
      {
        label: 'SOLVED TASKS',
        data: datasArray,
        backgroundColor: [
          '#F9F5FF',
          '#F4EBFF',
          '#E9D7FE',
          '#D6BBFB',
          '#B692F6',
          '#9E77ED',
          '#7F56D9',
          '#6941C6',
          '#53389E',
          '#42307D',
          '#2C1C5F',
        ],
        borderColor: [
          '#F9F5FF',
          '#F4EBFF',
          '#E9D7FE',
          '#D6BBFB',
          '#B692F6',
          '#9E77ED',
          '#7F56D9',
          '#6941C6',
          '#53389E',
          '#42307D',
          '#2C1C5F',
        ],
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
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