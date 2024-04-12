import React from 'react';
import styles from './Progress.module.scss';

const Progress = () => {
  return (
    <div className={styles.progress}>
      <div className={styles.content}>
        <div className={styles.title}>Ваш прогресс</div>
        <div className={styles.list}>

          <div className={styles.listItem}>
            <div className={styles.listItemTitle}>
              PWN
            </div>
            <div className={styles.listItemProgress}>
              148%
            </div>
          </div>

          <div className={styles.listItem}>
            <div className={styles.listItemTitle}>
              PWN
            </div>
            <div className={styles.listItemProgress}>
              148%
            </div>
          </div>

          <div className={styles.listItem}>
            <div className={styles.listItemTitle}>
              PWN
            </div>
            <div className={styles.listItemProgress}>
              148%
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default React.memo(Progress);