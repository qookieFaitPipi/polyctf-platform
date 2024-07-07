import React from 'react';
import styles from './UserInfo.module.scss';

// axios
import axios from 'axios';

// jwt-decode
import { jwtDecode } from 'jwt-decode';

// hook
import { getCookie } from '../../../Hooks/getCookie';

// react-toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { setUpdateState } from '../../../Redux/slices/UpdateSlice';

const UserInfo = ({userId, username, userImage, setNewUsernameModalState}) => {
  const { updateState } = useSelector((state) => state.UpdateSlice);
  const dispatch = useDispatch();

  const notifySuccess = (e) => toast.success(e);
  const notifyError = (e) => toast.error(e);

  const decodedToken = jwtDecode(getCookie('token'));
  const subValue = decodedToken.sub;

  console.log(updateState)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        uploadImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('avatar', file);

    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    };

    const config = {
      headers: headers
    };

    try {
      const response = await axios.post('https://backend.polyctf.ru/api/set_avatar', formData, config);

      if (response.status === 200) {
        notifySuccess('Avatar successfully uploaded');
        dispatch(setUpdateState(true));
        dispatch(setUpdateState(true));

      } else {
        notifyError('Avatar upload error');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      notifyError('Avatar upload error');
    }
  };

  const editUsername = () => {
    if(userId == subValue) {
      setNewUsernameModalState(true);
    }
  }

  return (
    <div className={styles.user}>
      <div className={styles.content}>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          id="avatarInput"
          onChange={handleImageChange}
          disabled={userId != subValue ? true : false}
        />
        <label htmlFor="avatarInput" style={{ cursor: 'pointer' }} className={styles.label}>
          <img
            src={userImage || 'https://via.placeholder.com/150'}
            alt="Avatar"
            className={styles.icon}
          />
        </label>
        <div className={styles.username} onClick={editUsername}>{username}</div>
        <div className={styles.contacts}>
          <div className={styles.left}>
            <div className={styles.text}>MY CONTACTS</div>
            <div className={styles.colored}>@{username}</div>
          </div>
          <div className={styles.right}>
            <div className={styles.text}>WITH POLYCTF</div>
            <div className={styles.colored}>None days</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(UserInfo);