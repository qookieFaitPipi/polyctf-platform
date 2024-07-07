import React, { useState } from 'react';
import styles from './Register.module.scss';

import Cookies from 'js-cookie';

// axios
import axios from 'axios';

// react-router-dom
import { useNavigate } from 'react-router';

const Register = ({setRegisterModalState, setEntryModalState}) => {
  const [userLogin, setUserLogin] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();

  const userRegister = () => {
    const userData = {
      'login': userLogin,
      'email': userEmail,
      'password': userPassword,
    }

    try {
      axios.post('https://backend.polyctf.ru/api/login', userData).then((response) => {
        if(response.status === 200) {
          setRegisterModalState(false);

          Cookies.set('token', response.data.access_tokenalue, { expires: 1 });
          navigate('/categories');
        }
        if(response.status === 401) {
          alert("Аккаунт с таким именем уже существует");
        }
        console.log(response.status);
      });
    } catch(err) {
      console.log(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    userRegister();
  };
  
  return (
    <div className={styles.active} onClick={() => setRegisterModalState(false)}>
      <form className={styles.content} onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
        <div className={styles.title}>РЕГИСТРАЦИЯ</div>
        <input className={styles.input} value={userLogin} onChange={(e) => setUserLogin(e.target.value)} placeholder='username' type="text" />
        <input className={styles.input} value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder='email' type="email" />
        <input className={styles.input} value={userPassword} onChange={(e) => setUserPassword(e.target.value)} placeholder='password' type="text" />
        <input className={styles.button} tabIndex="1" value='СОЗДАТЬ АККАУНТ' type="submit" onClick={userRegister} />
        <div className={styles.regLink} onClick={() => {setEntryModalState(true) ; setRegisterModalState(false)}}>Уже есть аккаунт?</div>
      </form>
    </div>
  )
}

export default React.memo(Register);