import React from 'react';
import styles from './RHeader.module.scss';

// images
import logo from './../../Assets/images/main-logo.png';

const RHeader = () => {
  return (
    <div className={styles.header}> 
      <div className={styles.content}>
        <div className={styles.left}>
          <img className={styles.logo} src={logo} width="346px" height="147px" alt="" />          
        </div>
        <div className={styles.middle}>
          LIVEBOARD
        </div>
        <div className={styles.right}>
          TIME TO THE END: 12h
        </div>
      </div>
    </div>
  )
}

export default React.memo(RHeader);