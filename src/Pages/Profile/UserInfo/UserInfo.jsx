import React from 'react';
import styles from './UserInfo.module.scss';

const UserInfo = ({username, userImage}) => {
  return (
    <div className={styles.user}>
      <div className={styles.content}>
        <img className={styles.icon} src={userImage} alt="user_icon" />
        <div className={styles.username}>{username}</div>
        <div className={styles.contacts}>
          <div className={styles.left}>
            <div className={styles.text}>MY CONTACTS</div>
            <div className={styles.colored}>@{username}</div>
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