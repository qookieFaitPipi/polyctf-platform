import React, {useState, useEffect} from 'react';
import styles from './UserInfo.module.scss';

// axios
import axios from 'axios';

// images
import user from '../../../../Assets/images/icons/elipse.svg'

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
      axios.get("http://polyctf.alexavr.ru/api/get_user_image", config).then((res) => {
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
            <div>Мои контакты @eianisimov</div>
          </div>
          <div className={styles.left}>
            <div>На POLYCTF 7 дней</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(UserInfo);