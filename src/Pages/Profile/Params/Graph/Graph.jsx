import React from 'react';
import styles from './Graph.module.scss';

// images
import raitLeft from './../../../../Assets/images/icons/rait_left.svg';
import raitRight from './../../../../Assets/images/icons/rait_right.svg';
import raitTasks from './../../../../Assets/images/icons/rait_tasks.svg';

// components
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['PWN', 'WEB', 'Reverse', 'Crypto', 'Stega', 'OSINT'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
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

const Graph = ({sumPoints, placeInRating, countSolvedTasks, userCountFirstBlood}) => {
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