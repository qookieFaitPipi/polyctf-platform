import React, { useEffect, useState } from 'react';
import styles from './MHeader.module.scss';

// axios
import axios from 'axios';

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react-router-dom
import { Link } from 'react-router-dom';

// hooks
import { getCookie } from '../../Hooks/getCookie';

// images
import logo from './../../Assets/images/main-logo.png';

// redux
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setUserInfo } from '../../Redux/slices/UserSlice';

const MHeader = () => {
  const { username, image } = useSelector((state) => state.UserSlice);
  const [location, setLocation] = useState('CATEGORIES')

  const [flag, setFlag] = useState('');
  const notifySuccess = (e) => toast.success(e);
  const notifyError = (e) => toast.error(e);
  const notifyWarning = (e) => toast.warning(e);

  const dispatch = useDispatch();

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
    
    try {
      axios.get("https://hosting.alexavr.ru/api/get_user_info", config).then((res) => {
        dispatch(setUserInfo({username: res.data.username, image: res.data.image}))
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
      axios.post('https://hosting.alexavr.ru/api/check_flag', userData, config).then((res) => {
        if(res.data.is_correct) {
          setFlag('');
          notifySuccess('Flag is correct');
        } else {
          notifyError('Wrong flag');
          //notifyWarning('Таск уже выполнен');
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
          <img className={styles.logo} src={logo} width="346px" height="147px" alt="" />          
        </div>
        <div className={styles.middle}>
          <div className={styles.navBlock}>
            <Link to='/categories' className={location.split('/').find(path => path === 'CATEGORIES') ? styles.navItemActive : styles.navItem} onClick={() => setLocation('CATEGORIES')}>CATEGORIES</Link>
            <Link to='/rating' className={location === 'RATING' ? styles.navItemActive : styles.navItem} onClick={() => setLocation('RATING')}>RATING</Link>
            <Link to='/profile' className={location === 'PROFILE' ? styles.navItemActive : styles.navItem} onClick={() => setLocation('PROFILE')}>PROFILE</Link>
          </div>
        </div>
        <div className={styles.flagbox}>
          <input className={styles.input} onChange={(e) => setFlag(e.target.value)} value={flag} placeholder='Flag: PolyCTF{}' type="text" />
          <input className={styles.button} onClick={userCheckFlag} type="submit" value="TRY" />
        </div>
        <Link to='/profile' className={styles.right}>
          <img className={styles.icon} src={image} alt="" />
          <div className={styles.username}>{username}</div>
        </Link>
      </div>
    </div>
  )
}

export default MHeader;
