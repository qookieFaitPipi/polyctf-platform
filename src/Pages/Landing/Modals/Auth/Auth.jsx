import React from 'react';
import styles from './Auth.module.scss';

import axios from 'axios';

import TelegramLoginButton from 'react-telegram-login';

// react-router-dom
import { useNavigate } from 'react-router';

// redux
import { useDispatch } from 'react-redux';
import { login } from '../../../../Redux/slices/UserSlice';

const Auth = ({setAuthModalState}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTelegramResponse = (res) => {
    try {
      axios.post('https://hosting.alexavr.ru/api/login', res).then((response) => {
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
    <div className={styles.auth} onClick={() => setAuthModalState(false)}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.title}>ВХОД</div>
        <TelegramLoginButton className={styles.tgAuth} dataOnauth={handleTelegramResponse} botName="ZAvrikDinozavrik_bot" />
      </div>
    </div>
  )
}

export default React.memo(Auth);