import React, { useState } from 'react';
import styles from './Register.module.scss';

// captcha
import ReCAPTCHA from "react-google-recaptcha";

// axios
import axios from 'axios';

const Register = ({setRegisterModalState, setEntryModalState}) => {
  const [userLogin, setUserLogin] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // captcha
  const [captchaState, setCaptchaState] = useState(false);

  const userRegister = () => {
    setCaptchaState(true);
  }

  const changeCaptcha = (e) => {
    const userRegisterData = {
      'login': userLogin,
      'email': userEmail,
      'password': userPassword,
    }

    try {
      axios.post('https://backend.polyctf.ru/api/login', userRegisterData).then((response) => {
        if(response.status === 200) {
          setCaptchaState(false);
          setEntryModalState(true);
        }
        if(response.status === 401) {
          alert("Аккаунт с таким именем уже существует");
        }
        console.log(response.status);
      });
    } catch(err) {
      console.log(err);
    }
    setRegisterModalState(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    userRegister();
  };
  
  return (
    <div className={styles.active} onClick={() => setRegisterModalState(false)}>
      {
      captchaState
        ?
        <div className={styles.content}>
          <ReCAPTCHA 
            sitekey="6LeCQh4qAAAAAOvhy5WQQQ_8C1u1uzuBFtxh-D34"
            onChange={changeCaptcha}
          />
        </div>
        :
        <form className={styles.content} onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
          <div className={styles.title}>РЕГИСТРАЦИЯ</div>
          <input className={styles.input} value={userLogin} onChange={(e) => setUserLogin(e.target.value)} placeholder='username' type="text" />
          <input className={styles.input} value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder='email' type="email" />
          <input className={styles.input} value={userPassword} onChange={(e) => setUserPassword(e.target.value)} placeholder='password' type="password" />
          <input className={styles.button} tabIndex="1" value='СОЗДАТЬ АККАУНТ' type="submit" onClick={() => setCaptchaState(true)} />
          <div className={styles.regLink} onClick={() => {setEntryModalState(true) ; setRegisterModalState(false)}}>Уже есть аккаунт?</div>
        </form>
      }
    </div>
  )
}

export default React.memo(Register);