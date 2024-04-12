import React, { useEffect, useState } from 'react';
import styles from './MHeader.module.scss';

// axios
import axios from 'axios';

// react-router-dom
import { Link } from 'react-router-dom';

// hooks
import { getCookie } from '../../Hooks/getCookie';

const MHeader = () => {
  const [username, setUsername] = useState('');
  const [userImage, setUserImage] = useState('');
  const [flag, setFlag] = useState('');

  useEffect(() => {
    const tokenParts = getCookie('token').split('.');
    const payload = JSON.parse(atob(tokenParts[1]));    
    const user_name = payload.sub;
    setUsername(user_name);

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

  const userCheckFlag = () => {
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
    const userData = {
      flag: flag
    }
    try {
      axios.post('http://polyctf.alexavr.ru/api/check_flag', userData, config).then((res) => {
        console.log(res);
        if(res.data.is_correct) {
          setFlag('');
        }
      });
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.header}> 
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.title}>POLYCTF</div>
        </div>
        <div className={styles.middle}>
          <div className={styles.navBlock}>
            <Link to='/categories' className={window.location.pathname === '/categories' ? styles.navItemActive : styles.navItem}>КАТЕГОРИИ</Link>
            <Link to='/rating' className={window.location.pathname === '/rating' ? styles.navItemActive : styles.navItem}>РЕЙТИНГ</Link>
            <Link to='/profile' className={window.location.pathname === '/profile' ? styles.navItemActive : styles.navItem}>ПРОФИЛЬ</Link>
          </div>
          <input className={styles.input} onChange={(e) => setFlag(e.target.value)} value={flag} placeholder='Флаг: polyCTF{}' type="text" />
          <input className={styles.button} onClick={userCheckFlag} type="submit" value="Проверить" />
        </div>
        <div className={styles.right}>
          <img className={styles.icon} src={userImage} alt="" />
          <div className={styles.username}>{username}</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(MHeader);
