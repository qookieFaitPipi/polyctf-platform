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
      </div>
    </div>
  )
}

export default React.memo(RHeader);