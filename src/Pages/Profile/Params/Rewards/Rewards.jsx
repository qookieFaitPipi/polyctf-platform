import React from 'react';
import styles from './Rewards.module.scss';

// components
import Reward from './Reward/Reward';

const Achieve = () => {
  return (
    <div className={styles.rewards}>
      <div className={styles.content}>
        <div className={styles.title}>Ваши достижения</div>
        <div className={styles.list}>
          <Reward />
          <Reward />
          <Reward />
          <Reward />
          <Reward />
          <Reward />
          <Reward />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Achieve);