import React from 'react';
import styles from './Reward.module.scss';

// images
import toy from './../../../../../Assets/images/icons/toy.svg';

const Reward = () => {
  return (
    <div className={styles.reward}>
      <div className={styles.content}>
        <img src={toy} alt="" />
        <div className={styles.rewardInfo}>
          <div className={styles.rewardTitle}>
            PEACEMAKER
          </div>
          <div className={styles.rewardText}>
            Завершить все здаания без первой крови
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Reward);