import React, { useEffect, useState } from 'react';
import styles from './MHeader.module.scss';

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// axios
import axios from 'axios';

// react-router-dom
import { Link } from 'react-router-dom';

// hooks
import { getCookie } from '../../Hooks/getCookie';

// images
import logo2 from './../../Assets/images/logo5.png';

const MHeader = () => {
  const [username, setUsername] = useState('');
  const [userImage, setUserImage] = useState('');
  const [flag, setFlag] = useState('');
  const notifySuccess = (e) => toast.success(e);
  const notifyError = (e) => toast.error(e);

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
      axios.get("https://polyctf.alexavr.ru/api/get_user_image", config).then((res) => {
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
      axios.post('https://polyctf.alexavr.ru/api/check_flag', userData, config).then((res) => {
        console.log(res);
        if(res.data.is_correct) {
          setFlag('');
          notifySuccess('flag is correct');
        } else {
          notifyError('wrong flag');
        }
      });
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.header}> 
      <ToastContainer 
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={styles.content}>
        <div className={styles.left}>
          <img className={styles.logo} src={logo2} width="346px" height="147px" alt="" />          
        </div>
        <div className={styles.middle}>
          <div className={styles.navBlock}>
            <Link to='/categories' className={window.location.pathname.split('/').find(path => path === 'categories') ? styles.navItemActive : styles.navItem}>CATEGORIES</Link>
            <Link to='/rating' className={window.location.pathname === '/rating' ? styles.navItemActive : styles.navItem}>RATING</Link>
            <Link to='/profile' className={window.location.pathname === '/profile' ? styles.navItemActive : styles.navItem}>PROFILE</Link>
          </div>
        </div>
        <div className={styles.flagbox}>
          <input className={styles.input} onChange={(e) => setFlag(e.target.value)} value={flag} placeholder='Flag: polyCTF{}' type="text" />
          <input className={styles.button} onClick={userCheckFlag} type="submit" value="TRY" />
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
