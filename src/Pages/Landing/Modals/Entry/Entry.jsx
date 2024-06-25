import React, { useState } from 'react';
import styles from './Entry.module.scss';

// axios
import axios from 'axios';

// react-router-dom
import { useNavigate } from 'react-router';

// telegram
import TelegramLoginButton from 'react-telegram-login';

// redux
import { useDispatch } from 'react-redux';
import { login } from '../../../../Redux/slices/UserSlice';

const Entry = ({setEntryModalState, setRegisterModalState}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const userAuth = () => {
    const userData = {
      'login': userLogin,
      'password': userPassword
    }

    try {
      axios.post('https://backend.polyctf.ru/api/login', userData).then((response) => {
        if(response.status === 200) {
          dispatch(login({
            userLogin: userLogin,
            accessToken: response.data.access_token,
            isEntered: true,
          }));
          navigate('/categories');
        }
      });
    } catch(err) {
      console.log(err);
    }
  }

  const handleTelegramResponse = (res) => {
    try {
      axios.post('https://backend.polyctf.ru/api/login', res).then((response) => {
        if(response.status === 200) {
          dispatch(login({
            accessToken: response.data.access_token,
          }));
          navigate('/categories');
        }
      });
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.active} onClick={() => setEntryModalState(false)}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.title}>ВХОД</div>
        <input className={styles.input} value={userLogin} onChange={(e) => setUserLogin(e.target.value)} placeholder='username' type="text" />
        <input className={styles.input} value={userPassword} onChange={(e) => setUserPassword(e.target.value)} placeholder='password' type="text" />
        <button className={styles.button} onClick={userAuth} type="submit">ВОЙТИ</button>
        <div className={styles.subText}>Забыл пароль? <span className={styles.colored}>ВОССТАНОВИТЬ</span></div>
        <div className={styles.or}>ИЛИ</div>

        <TelegramLoginButton className={styles.tgAuth} dataOnauth={handleTelegramResponse} botName="polyctf_bot" />
        <div className={styles.regLink} onClick={() => {setRegisterModalState(true) ; setEntryModalState(false)}}>Еще нет аккаунта?</div>
      </div>
    </div>
  )
}

export default React.memo(Entry);
