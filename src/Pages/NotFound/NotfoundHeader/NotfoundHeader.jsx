import React from 'react';
import styles from './NotfoundHeader.module.scss';

import logo from './../../../Assets/images/main-logo.png';

const NotfoundHeader = () => {
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

export default React.memo(NotfoundHeader);