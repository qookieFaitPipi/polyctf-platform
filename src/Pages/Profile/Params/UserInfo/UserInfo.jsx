import React, {useState, useEffect} from 'react';
import styles from './UserInfo.module.scss';

// axios
import axios from 'axios';

// hooks
import { getCookie } from './../../../../Hooks/getCookie';

const UserInfo = () => {
  const [username, setUsername] = useState('');
  const [userImage, setUserImage] = useState('');

  useEffect(() => {
    const tokenParts = getCookie('token').split('.');
    const payload = JSON.parse(atob(tokenParts[1]));    
    const user_name = payload.sub;
    setUsername(user_name);
  }, [])


  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
    try {
      axios.get("https://polyctf.alexavr.ru/api/get_user_image", config).then((res) => {
        setUserImage(res.data);
      })
    } catch (err) {
      console.log(err);
    }
  }, [])
  
  return (
    <div className={styles.user}>
      <div className={styles.content}>
        <img className={styles.icon} src={userImage} alt="userIcon" />
        <div className={styles.username}>{username}</div>
        <div className={styles.contacts}>
          <div className={styles.left}>
            <div className={styles.title}>MY CONTACTS</div>
            <div className={styles.colored}>@eianisimov</div>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>ON POLYCTF</div>
            <div className={styles.colored}>7 дней</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(UserInfo);