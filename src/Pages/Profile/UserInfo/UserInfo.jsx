import React from 'react';
import styles from './UserInfo.module.scss';

// redux
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const { username, image } = useSelector((state) => state.UserSlice);
  
  return (
    <div className={styles.user}>
      <div className={styles.content}>
        <img className={styles.icon} src={image} alt="user_icon" />
        <div className={styles.username}>{username}</div>
        <div className={styles.contacts}>
          <div className={styles.left}>
            <div className={styles.text}>MY CONTACTS</div>
            <div className={styles.colored}>None</div>
          </div>
          <div className={styles.right}>
            <div className={styles.text}>WITH POLYCTF</div>
            <div className={styles.colored}>None days</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(UserInfo);