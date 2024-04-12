import React, {useState, useEffect} from 'react';
import styles from './UserInfo.module.scss';

// images
import user from '../../../../Assets/images/icons/elipse.svg'

// hooks
import { getCookie } from './../../../../Hooks/getCookie';

const UserInfo = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const tokenParts = getCookie('token').split('.');
    const payload = JSON.parse(atob(tokenParts[1]));    
    const user_name = payload.sub;
    setUsername(user_name);
  }, [])
  
  return (
    <div className={styles.user}>
      <div className={styles.content}>
        <img className={styles.icon} src={user} alt="userIcon" />
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