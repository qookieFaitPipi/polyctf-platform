import React from 'react'
import styles from './ProgressPoint.module.scss';

const ProgressPoint = ({id, name, progress}) => {
  return (
    <div className={styles.progressPoint}>
      <div className={styles.content}>
        <div className={styles.pointTitle}>
          {name}
        </div>
        <div className={styles.pointText}>
          {progress}
        </div>
      </div>
    </div>
  )
}

export default React.memo(ProgressPoint);