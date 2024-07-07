import React, { useEffect, useState } from 'react';
import styles from './MHeader.module.scss';

import Cookies from 'js-cookie';

// axios
import axios from 'axios';

// jwt-decode
import { jwtDecode } from 'jwt-decode';

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react-router-dom
import { useNavigate, Link } from 'react-router-dom';

// hooks
import { getCookie } from '../../Hooks/getCookie';

// images
import logo from './../../Assets/images/main-logo.png';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setUpdateState } from '../../Redux/slices/UpdateSlice';

const MHeader = () => {
  const { updateState } = useSelector((state) => state.UpdateSlice);
  const dispatch = useDispatch();
  
  const [username, setUsername] = useState('');
  const [userImage, setUserImage] = useState('');

  const [location, setLocation] = useState(window.location.pathname)
  const [popupState, setPopupState] = useState(false);

  const decodedToken = jwtDecode(getCookie('token'));
  const subValue = decodedToken.sub;

  const [flag, setFlag] = useState('');
  
  const notifySuccess = (e) => toast.success(e);
  const notifyError = (e) => toast.error(e);
  const notifyWarning = (e) => toast.warning(e);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setUpdateState(false));
    
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
    
    axios.get("https://backend.polyctf.ru/api/get_user_info", config)
    .then((res) => {
      setUsername(res.data.username);
      setUserImage(res.data.image);
    })
    .catch((err) => {
      if (err.response.status === 422) {
        navigate('/');
      }
    });
  }, [dispatch, navigate, updateState])

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

    if(flag === '')
      return;

    try {
      axios.post('https://backend.polyctf.ru/api/check_flag', userData, config).then((res) => {
      if(res.data.is_existed) {
        setFlag('');
        notifyWarning("You can't solve this twice. Hmm...");
        return;
      }
      if(res.data.is_correct) {
          setFlag('');
          notifySuccess('Flag is correct');
          dispatch(setUpdateState(true));
        } else {
          notifyError('Wrong flag');
        }
      });
    } catch(err) {
      console.log(err);
    }
  }

  const userLogout = () => {
    Cookies.remove('token');
    navigate('/');
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
        style={{width: '400px'}}
      />
      <div className={styles.content}>
        <div className={styles.left}>
          <img className={styles.logo} src={logo} width="346px" height="147px" alt="" />          
        </div>
        <div className={styles.middle}>
          <div className={styles.navBlock}>
            <Link to='/categories' className={location.split('/').find(path => path === 'categories') ? styles.navItemActive : styles.navItem} onClick={() => setLocation('/categories')}>CATEGORIES</Link>
            <Link to='/rating' className={location === '/rating' ? styles.navItemActive : styles.navItem} onClick={() => setLocation('/rating')}>RATING</Link>
            <Link to={`/profile/${subValue}`} className={location.split('/').find(path => path === 'profile') ? styles.navItemActive : styles.navItem} onClick={() => setLocation('profile')}>PROFILE</Link>
          </div>
        </div>
        <div className={styles.flagbox}>
          <input className={styles.input} onChange={(e) => setFlag(e.target.value)} value={flag} placeholder='Flag: PolyCTF{}' type="text" />
          <input className={styles.button} onClick={userCheckFlag} type="submit" value="TRY" />
        </div>
        <div onClick={() => setPopupState(!popupState)} className={styles.right}>
          <img className={styles.icon} src={userImage} alt="icon" />
          <div className={styles.username}>{username}</div>

          {popupState
            ?
            <div className={styles.popup}>
              <div className={styles.content} onClick={e => e.stopPropagation()}>
                <input className={styles.popupSettingsInput} type="submit" value='SETTINGS' />
                <input onClick={userLogout} className={styles.popupLogoutInput} type="submit" value='LOGOUT' />
              </div>
            </div>
            :
            <></>
          }
        </div>
      </div>
    </div>
  )
}

export default React.memo(MHeader);