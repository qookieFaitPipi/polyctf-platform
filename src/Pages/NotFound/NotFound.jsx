import React from 'react';
import styles from './NotFound.module.scss';

// components
import NotfoundHeader from './NotfoundHeader/NotfoundHeader';
import vector from './../../Assets/images/background/categoryBack.svg'

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <NotfoundHeader />
      <div className={styles.text} style={{backgroundImage: `url(${vector})`}}>
        N0t fOuNd
      </div>
    </div>
  )
}

export default React.memo(NotFound);